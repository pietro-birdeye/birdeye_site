import fs from 'node:fs';
import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const steveUrl = env.VITE_STEVE_URL || env.STEVE_URL;

  if (!steveUrl) {
    throw new Error('STEVE_URL (or VITE_STEVE_URL) is required for Joni builds');
  }

  const rootDir = __dirname;
  const homepageInputs = fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('Homepage_'))
    .map((entry) => {
      const htmlPath = path.resolve(rootDir, entry.name, 'index.html');
      return fs.existsSync(htmlPath) ? [entry.name, htmlPath] : null;
    })
    .filter(Boolean) as [string, string][];

  const input = {
    main: path.resolve(rootDir, 'index.html'),
    ...Object.fromEntries(homepageInputs),
  };

  return {
    define: {
      __STEVE_URL__: JSON.stringify(steveUrl),
    },
    server: {
      port: 4173,
      strictPort: true,
      open: true,
    },
    resolve: {
      alias: {
        '@harmony': path.resolve(__dirname, '../harmony'),
      },
    },
    build: {
      rollupOptions: {
        input,
      },
    },
  };
});
