const path = require('path');
const glob = require('glob');
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                    bypassOnDebug: true,
                    },
                },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            },
            {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                   presets: ['env']
                 }
               }
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     query: {
            //       presets: ['babili']
            //     }
            // },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!postcss-loader",
            },
        ],
        loaders: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        // new BabiliPlugin()
        
    ]

    // watch: true,
};