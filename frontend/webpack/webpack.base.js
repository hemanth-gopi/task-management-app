const path = require('path'); // no i18n
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin'); // no i18n
const sass = require('sass'); //no i18n
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(__dirname)

module.exports = {
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.[ext]',
      path: path.resolve(__dirname, '../static/frontend'),
    },
    module: {
        rules: [
            {
                test: /(.jsx|.js)$/,
                exclude: /node_modules|.json/,
                use: {
                    loader: 'babel-loader' //no i18n
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module\.s?[ac]ss$/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader', // no i18n
                    {
                        loader: 'sass-loader', // no i18n
                        options: {
                            implementation: sass
                        }
                    }
                ]
            },
            {
                test: /\.(svg|gif|png|jpg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader', //no i18n
                    options: {
                        limit: '1000',
                        name: '[name].[contenthash:16].[ext]'
                    }
                }
            },
            {
                test: /\.(ico|wav)$/,
                use: {
                    loader: 'file-loader', // no i18n
                    options: {
                        name: '[name].[contenthash:16].[ext]',
                        emitFile: true
                        // useRelativePath: false,
                        // outputPath: '/images',
                    }
                }
            },

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.jpg', '.png', '.gif', '.css'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Task manager app',
            filename: 'index.html',
            minify: false,
            template: path.resolve(__dirname, '../templates/frontend/index.html')
        }),
        new CleanWebpackPlugin(),
    ]


  };