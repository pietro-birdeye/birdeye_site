import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  define: {
    __STEVE_URL__: JSON.stringify(process.env.VITE_STEVE_URL || process.env.STEVE_URL || 'http://localhost:4000'),
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
