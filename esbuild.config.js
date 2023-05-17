const { nodeExternalsPlugin } = require("esbuild-node-externals");

require("esbuild").build({
  entryPoints: ["src/app.jsx"],
  bundle: true,
  minify: true,
  format: "cjs",
  sourcemap: true,
  outfile: "dist/output.js",
  plugins: [nodeExternalsPlugin()],
  // external: ["react", "react-dom"],
});
