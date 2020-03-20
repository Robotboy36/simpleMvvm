
const webpackMerge = require('webpack-merge')
const baseConfig = require('./config.base')

module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    // 开发
    devServer: {
        port: 9090,
        clientLogLevel: 'error'
    }
})
