import esbuild from 'esbuild';
import { GasPlugin } from 'esbuild-gas-plugin';

esbuild
  .build({
    entryPoints: ['src/server/main.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    minify: true,
    format: 'esm',
    logLevel: 'info',
    plugins: [GasPlugin],
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
