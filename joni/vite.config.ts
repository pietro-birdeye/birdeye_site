import { defineConfig } from 'vite';
import path from 'node:path';

const steveUrl = process.env.VITE_STEVE_URL || process.env.STEVE_URL;

if (!steveUrl) {
  throw new Error('STEVE_URL (or VITE_STEVE_URL) is required for Joni builds');
}

export default defineConfig({
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
});
