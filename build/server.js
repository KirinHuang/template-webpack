const express = require('express')
const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")

let config = require('./webpack.dev')
// add HotModuleReplacementPlugin into the entry array
config = merge(config, {
    entry: {
        /** reload是重载主入口，重新加载所有的页面，如果为false，main.js修改后会提示 
         *  [HMR] The following modules couldn't be hot updated: (Full reload needed) */
        client: 'webpack-hot-middleware/client?reload=true',
    }
})
const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

console.log(`static path ${resolve(__dirname + './../')}`)
app.use('/', express.static(resolve(__dirname + './../')))

app.listen(8080, () => {
    console.log('webpack server is running!')
})