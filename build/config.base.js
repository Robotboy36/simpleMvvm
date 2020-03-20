
const path = require('path')
const resolve = dir => path.resolve(__dirname, '../', dir)
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        simpleMvvm: resolve('./src/main.js')
    },

    output: {
        path: resolve('./dist'),
        jsonpFunction: 'webpackJsonpMvvm',
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src')]
            }
        ]
    },

    plugins: [
        new htmlPlugin({
            template: resolve('index.html'),
            inject: true,
            filename: 'index.html'
        })
    ]
}
