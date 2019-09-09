const path = require("path");
/**
 * Webpack config to bundle the action code into a single bundle/index.js file.
 */
module.exports = {
  entry: './dist/index.js',
  target: 'node',
  output: {
    library: 'action',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'bundle'),
    filename: 'index.js'
  },
  mode: 'development', // development production
};
