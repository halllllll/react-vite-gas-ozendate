import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import esbuild from 'esbuild';
import { GasPlugin } from 'esbuild-gas-plugin';
import * as glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

console.log('---- build html singlefile ----');

const __dirname = fileURLToPath(new URL('.', import.meta.url));
// root直下のindex.htmlとsrc下のhtmlファイルがエントリポイントの対象
const entries = ['./index.html', ...glob.sync(path.resolve(__dirname, 'src', '**', '*.html'))];

console.log('entries: ', entries);

for (const entry of entries) {
  // const componentName = path.basename(path.dirname(entry));
  await build({
    // root: path.resolve(__dirname, `./${componentName}`),
    plugins: [react(), tsconfigPaths(), viteSingleFile(), tailwindcss()],
    build: {
      // dist上書き
      emptyOutDir: false,
      outDir: './dist', // build to dist directory at root (omitting the src dir)
      // assetsDir: componentName,
      rollupOptions: {
        // input: entry,
        input: {
          // The key will be the output filename (e.g., index.html, menu.html)
          [path.basename(entry)]: entry,
        },
        // 正直outputは意味なさそう singlefileになるので
        output: {
          entryFileNames: '[name].js',
          // This prevents nested folder structures in output
          // preserveModules: false,
        },
      },
    },
  });
}

console.log('---- build GAS code ----');

esbuild
  .build({
    entryPoints: ['src/server/main.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    minify: true,
    // format: 'esm', export文が生成されてしまうのでやめとく
    logLevel: 'info',
    target: 'ES2021', // apps script環境はclass fieldに未対応なため
    plugins: [GasPlugin as unknown as esbuild.Plugin],
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
