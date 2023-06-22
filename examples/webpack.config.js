/* eslint-disable */

const webpack = require('webpack');
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PROD = process.env.NODE_ENV === 'production';
const DEV = !PROD;

const config = {
    entry: ['./examples/index.js'],
    output: {
        filename: '[id][chunkhash].js',
        path: path.resolve(__dirname, '../public'),
        publicPath: DEV ? '/' : '/react-contextmenu/',
        hashDigestLength: 6,
        chunkFilename: '[id].[chunkhash].js',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                         presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {
                                modules: false,
                                targets: {
                                    browsers: 'IE >= 11, Edge >= 12, FireFox >= 38, Chrome >= 47, Opera >= 34, Safari >= 8'
                                }
                            }]
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }],
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname)
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(DEV ? {
            filename: 'styles.css',
        } : {
            chunkFilename: 'styles.[contenthash:6].css'
        }),
        new HtmlWebpackPlugin({
            template: 'examples/index.html',
            inject: true,
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        })
    ]
};

!PROD && (config.devtool = 'source-map');

PROD && config.plugins.push(
     new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
        }
    })
);

PROD && config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
);

module.exports = config;
