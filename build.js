import { GasPlugin } from "esbuild-gas-plugin";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ['src/server/main.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  minify: true,
  logLevel: 'info',
  plugins: [GasPlugin],
})
.catch((e) => {
  console.error(e)
  process.exit(1)
});
