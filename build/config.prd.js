
const webpackMerge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./config.base')

module.exports = webpackMerge(baseConfig, {
    mode: 'production',

    optimization: {
        // runtimeChunk: {
        //     name: 'runtime'
        // },
        minimize: true,
        minimizer: [ 
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
        ]
    }
})
