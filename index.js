const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const splitOutputPath = require('./configurations/helpers').splitOutputPath;
const environmentConfig = require('./configurations/environmentConfig');
const manifestPluginConfig = require('./configurations/manifestPluginConfig');
const cleanWebpackPluginConfig = require('./configurations/cleanWebpackPluginConfig');

const inProduction = (process.env.NODE_ENV === 'production');

const baseConfig = {
    entry: null,

    output: {
        path: null,
        filename: '[name].[chunkhash:10].js',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader',
                })
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader',
                })
            },

            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[chunkhash:10].[ext]',
                }
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].[contenthash:10].css'),

        // @TODO: LoaderOptionsPlugin may be deprecated in the future.
        // @see: https://webpack.js.org/plugins/loader-options-plugin/
        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),
    ]
};

module.exports = function(customConfig, additionalOverrides) {
    const settings = additionalOverrides || {};
    const outputInfo = splitOutputPath(customConfig.output.path);
    const configurations = [baseConfig];

    configurations.push(
        cleanWebpackPluginConfig(outputInfo),
        environmentConfig(inProduction),
        manifestPluginConfig(outputInfo, settings),
        customConfig
    );

    return merge(configurations);
};
