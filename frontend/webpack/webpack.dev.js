// $Id$
const path = require('path'); // no i18n

const merge = require('webpack-merge'); // no i18n
const baseConfig = require('./webpack.base'); // no i18n
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin"); // no i18n


// console.log("Dirname --------")
// console.log(path.join(__dirname, "../dist/"))
console.log(baseConfig.output)

module.exports = merge(baseConfig, {
    
    mode: 'development', // no i18n

    devtool: 'eval-source-map', // no i18n

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*' // no i18n
        },
        // publicPath: path.join(__dirname, "../dist/"), //no i18n
        disableHostCheck: true,
        port:8080,
        host:"0.0.0.0",
        // writeToDisk: true
    },

    output: {
        filename: '[name].js' ,

    },
    devServer: {
        publicPath: '/static/frontend'
    },

    plugins:[

        new ExtractCssChunks({
            filename: '[name].css',
            hot: true, 
            orderWarning: true,
            reloadAll: true
        })
    ]    
});
