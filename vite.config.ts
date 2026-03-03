import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths(), viteSingleFile(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
  // devではpublic/mockServiceWorker.jsを配信するため有効、buildでは成果物に含めないため無効
  publicDir: command === 'serve' ? 'public' : false,
}));

