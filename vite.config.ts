import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const apiUrl = env.VITE_API_URL || 'http://localhost:8762';

  return {
    plugins: [react()],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },
    server: {
      proxy: {
        '/ms-vehicles': apiUrl,
        '/ms-operations': apiUrl,
      },
    },
  };
});
