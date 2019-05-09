const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const config = require('./config')
const devMode = process.env.NODE_ENV !== 'production'

let cssLoader = [
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        query: {
            importLoaders: 1
        }
    },
]

const webpackConfig = {
    context: config.PROJECT_ROOT,
    entry: {
        app: ['./src/main.tsx'],
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
                    chunks: 'all'
                },
            }
        }
    },
    externals: {
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].dev.css' : 'css/[name].[contenthash:5].css',
            chunkFilename: devMode ? 'css/[id].dev.css' : 'css/[id].[contenthash:5].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.tpl',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ // for http-server spa
            template: './src/index.tpl',
            filename: '404.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
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
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': '../src/'
        }
    }
}

module.exports = webpackConfig