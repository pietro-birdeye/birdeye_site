#!/usr/bin/env node
/**
 * Normalizes industry Lottie files by trimming empty canvas and recentering layer positions.
 * - Reads from steve/public/v1/industries/lottie/*.json
 * - Writes new files alongside originals with a "-trimmed" suffix
 * - Leaves originals untouched so we can revert easily
 *
 * Heuristic: find min/max of root layer positions, add padding, resize w/h, and shift layer positions.
 */

const fs = require('fs');
const path = require('path');

const LOTTIE_DIR = path.join(__dirname, '..', 'steve', 'public', 'v1', 'industries', 'lottie');
const OUTPUT_SUFFIX = '-trimmed';
const PADDING = 120; // extra pixels to avoid clipping after trim

const isNumberArray = (value) => Array.isArray(value) && typeof value[0] === 'number';

const collectPositions = (layers) => {
  const positions = [];
  const visit = (layer) => {
    const p = layer?.ks?.p?.k;
    if (!p) return;
    if (isNumberArray(p)) {
      positions.push(p);
    } else if (Array.isArray(p)) {
      p.forEach((kf) => {
        if (kf?.s && isNumberArray(kf.s)) positions.push(kf.s);
      });
    }
  };
  layers.forEach(visit);
  return positions;
};

const shiftPositions = (layers, offsetX, offsetY) => {
  const shiftVal = (val) => {
    if (!isNumberArray(val)) return val;
    const [x, y, ...rest] = val;
    return [x - offsetX, y - offsetY, ...rest];
  };
  const visit = (layer) => {
    const p = layer?.ks?.p;
    if (!p || !p.k) return;
    if (isNumberArray(p.k)) {
      p.k = shiftVal(p.k);
    } else if (Array.isArray(p.k)) {
      p.k = p.k.map((kf) => {
        if (kf?.s) kf.s = shiftVal(kf.s);
        return kf;
      });
    }
  };
  layers.forEach(visit);
};

const normalizeFile = (filePath) => {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const positions = collectPositions(data.layers || []);
  if (!positions.length) {
    console.warn(`No positions found in ${path.basename(filePath)}, skipping`);
    return;
  }

  const xs = positions.map((p) => p[0]);
  const ys = positions.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const offsetX = minX - PADDING;
  const offsetY = minY - PADDING;
  const newWidth = Math.round(maxX - minX + PADDING * 2);
  const newHeight = Math.round(maxY - minY + PADDING * 2);

  shiftPositions(data.layers || [], offsetX, offsetY);
  data.w = newWidth;
  data.h = newHeight;

  const parsed = path.parse(filePath);
  const outPath = path.join(parsed.dir, `${parsed.name}${OUTPUT_SUFFIX}${parsed.ext}`);
  fs.writeFileSync(outPath, JSON.stringify(data));
  console.log(`Trimmed ${parsed.base} -> ${path.basename(outPath)} (${data.w}x${data.h})`);
};

const run = () => {
  if (!fs.existsSync(LOTTIE_DIR)) {
    console.error(`Lottie directory not found: ${LOTTIE_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(LOTTIE_DIR).filter((f) => f.endsWith('.json'));
  files.forEach((file) => normalizeFile(path.join(LOTTIE_DIR, file)));
};

run();
