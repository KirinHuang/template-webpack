const merge = require('webpack-merge')
const common = require('./webpack.common')
const { resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./config')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: config.OUTPUT_DIR + 'js/[name].[contenthash:5].js',
        chunkFilename: config.OUTPUT_DIR + 'js/[name].[contenthash:5].js',
        publicPath: '',
    },
    devtool: 'source-map', // 源代码 品质
    plugins: [
        new CleanWebpackPlugin([
            resolve(config.PROJECT_ROOT, './dist'),
            resolve(config.PROJECT_ROOT, './*.html')
        ], {
            root: process.cwd()
        }),
        // new webpack.optimize.AggressiveSplittingPlugin(),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})