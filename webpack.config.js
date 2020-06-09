const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    deServer: {
        port: 3000
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}