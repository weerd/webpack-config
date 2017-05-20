const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(output) {
  return {
    plugins: [
      new CleanWebpackPlugin([output.directory], {
          root: output.rootPath,
          verbose: true,
          dry: false,
      }),
    ],
  };
};
