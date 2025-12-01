import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const steveUrl = env.VITE_STEVE_URL || env.STEVE_URL;

  if (!steveUrl) {
    throw new Error('STEVE_URL (or VITE_STEVE_URL) is required for Joni builds');
  }

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
  };
});
