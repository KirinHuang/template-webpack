const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const config = require('./config')
const devMode = process.env.NODE_ENV !== 'production'

let cssLoader = [
    devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        query: {
            importLoaders: 1,
        },
    },
]

const webpackConfig = {
    context: config.PROJECT_ROOT,
    entry: {
        app: ['./src/main.js'],
    },
    output: {
        path: config.PROJECT_ROOT,
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    externals: {},
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode
                ? 'css/[name].dev.css'
                : 'css/[name].[contenthash:5].css',
            chunkFilename: devMode
                ? config.OUTPUT_DIR + './css/[id].dev.css'
                : config.OUTPUT_DIR + './css/[id].[contenthash:5].css',
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            template: './src/index.ejs',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: '首页-SPA',
            // for http-server spa
            template: './src/index.ejs',
            filename: '404.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: cssLoader,
            },
            {
                test: /\.(png|gif|svg|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: 'img/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            '@': '../src/',
            vue$: 'vue/dist/vue.esm.js',
        },
    },
}

module.exports = webpackConfig
