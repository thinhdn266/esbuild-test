const res = require('esbuild').buildSync({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  minify: true,
  format: 'cjs',
  sourcemap: true,
  outfile: 'dist/output.js',
  // external: ['react', 'react-dom'], 
})