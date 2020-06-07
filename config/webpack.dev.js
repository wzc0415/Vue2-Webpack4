const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let dev = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        publicPath:'/',
        contentBase: path.join(__dirname, "../public"),
        host: 'localhost',
        port: '8081',
        open: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        compress: true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'dev',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(common,dev);
