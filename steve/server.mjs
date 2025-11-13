import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME = new Map(Object.entries({
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}));

function setCors(res) {
  const origin = process.env.CORS_ORIGIN || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '600');
}

function immutable(res) {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
}

function shortCache(res) {
  res.setHeader('Cache-Control', 'public, max-age=300');
}

function etagFor(stat) {
  return 'W/"' + stat.size + '-' + Number(stat.mtimeMs).toString(16) + '"';
}

function isRegistry(p) {
  return /\/v1\/registry\/.+\.json$/.test(p);
}

function isFingerprinted(filePath) {
  // Very simple heuristic: filename contains a dot-hash like name.abc123.css
  const base = path.basename(filePath);
  return /\.[0-9a-f]{6,}\./i.test(base);
}

const server = http.createServer((req, res) => {
  setCors(res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  try {
    const parsed = new URL(req.url, 'http://localhost');
    let pathname = decodeURIComponent(parsed.pathname);

    // Aliases for clearer public contracts
    if (pathname === '/v1/tokens/global.css') {
      pathname = '/v1/harmony/tokens/tokens.css';
    }

    // Consolidated icons layout (no legacy aliases)

    // Prevent directory traversal
    if (pathname.includes('..')) {
      res.statusCode = 400;
      res.end('Bad path');
      return;
    }

    // Default to index.html if root requested (optional)
    if (pathname === '/') pathname = '/index.html';

    const filePath = path.join(PUBLIC_DIR, pathname);
    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.statusCode = 404;
        res.end('Not found');
        return;
      }

      // Caching strategy
      if (isRegistry(pathname)) {
        shortCache(res);
      } else if (isFingerprinted(filePath)) {
        immutable(res);
      } else {
        // default modest cache
        res.setHeader('Cache-Control', 'public, max-age=3600');
      }

      // ETag/conditional for JSON
      const etag = etagFor(stat);
      res.setHeader('ETag', etag);
      if (req.headers['if-none-match'] === etag) {
        res.statusCode = 304;
        res.end();
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const type = MIME.get(ext) || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      const stream = fs.createReadStream(filePath);
      stream.on('error', () => {
        res.statusCode = 500;
        res.end('Error');
      });
      stream.pipe(res);
    });
  } catch (e) {
    res.statusCode = 500;
    res.end('Internal error');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Steve listening on http://localhost:${PORT}`);
});
