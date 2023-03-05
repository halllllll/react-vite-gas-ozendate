// build.cjs

const { GasPlugin } = require('esbuild-gas-plugin');

require('esbuild')
  .build({
    entryPoints: ['src/server/main.ts'],

    bundle: true,

    outfile: 'dist/main.js',

    logLevel: 'info',

    plugins: [GasPlugin],
  })
  .catch(() => process.exit(1));
