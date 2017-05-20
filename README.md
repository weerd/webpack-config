# Webpack Config

Webpack configuration for importing into projects as a quick starting base which can be amended easily.

## Usage

First, install this package and Webpack using NPM:

```
npm install --save-dev webpack @weerd/webpack-config
```

Next, create a `webpack.config.js` in your project's root directory:

```javascript
var path = require('path');
var configure = require('@weerd/webpack-config');

module.exports = configure({
    entry: {
        main: [
            './resources/assets/sass/main.scss',
            './resources/assets/init.js',
        ]
    },

    output: {
        path: path.resolve(__dirname, './public/_build'),
    },
});

```



## Dependencies


### Thanks
Inspired by @dfurnes's work on [DoSomething/webpack-config](https://github.com/DoSomething/webpack-config) and various [lessons](https://laracasts.com/series/webpack-for-everyone) from @laracasts regarding Webpack.
