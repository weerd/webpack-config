const merge = require('webpack-merge');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(output, overrides) {
  let config = {
      fileName: '_manifest.json',
      basePath: `${output.directory}/`,
  };

  if (overrides.hasOwnProperty('manifest')) {
    config = merge(config, overrides.manifest);
  }

  return {
    plugins: [
      new ManifestPlugin(config),
    ],
  };
};
