const webpack = require('webpack');

module.exports = function(inProduction) {
  if (inProduction) {
    return {
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
      ],
    };
  } else {
    return {};
  }
};
