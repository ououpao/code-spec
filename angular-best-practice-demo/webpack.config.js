var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080', 
            'webpack/hot/only-dev-server',
            './app/app.js',
        ],
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css?root=../img',
                exclude: /node_modules/
            },
            // {
            //     test: /\.png$/,
            //     loader: "url?limit=10000"
            // }, 
            {
                test: /\.jpg|.png$/,
                loader: "url?name=img/[name].[ext]?[hash]&limit=1"
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/',
        colors: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     'ng': 'angular'
        // }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html'
        })
    ]
};

module.exports = config;
