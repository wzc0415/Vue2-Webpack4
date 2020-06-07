const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

let prod = {
    mode: 'production',
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
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'prod',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}
module.exports = merge(common, prod);
