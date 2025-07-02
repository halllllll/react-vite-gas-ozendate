import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

const root = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist_menu');

export default defineConfig({
  root: root,
  plugins: [react(), tsconfigPaths(), viteSingleFile()],
  build: {
    outDir: dist,
    rollupOptions: {
      input: {
        menu: resolve(root, 'server', 'Menu', 'menu.html'),
      },
    },
  },
});
