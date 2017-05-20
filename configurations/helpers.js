module.exports = {
  splitOutputPath: function(path) {
    if (typeof path !== 'string' && ! path.length > 1) {
        return null;
    }

    path.replace(/\/+$/, '');

    const indexOfLastBackslash = path.lastIndexOf('/');

    return {
        rootPath: path.substring(0, indexOfLastBackslash),
        directory: path.substr(indexOfLastBackslash + 1),
    };
  }
}
