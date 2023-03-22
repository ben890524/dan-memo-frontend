import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      port: Number(env.VITE_APP_CONFIG_PORT),
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.json', '.ts', '.vue'],
    },

    build: {
      target: 'esnext',
    },
    plugins: [vue()],
  };
});
