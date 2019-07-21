const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const config = require('./config')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: config.OUTPUT_DIR + 'js/[name].dev.js',
        chunkFilename: config.OUTPUT_DIR + 'js/[name].dev.js',
        publicPath: '',
        pathinfo: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: config.PROJECT_ROOT,
        hot: true,
    },
})