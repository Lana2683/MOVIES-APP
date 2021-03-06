const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'src/index.html',
            filename: 'index.html'
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8000,
        open: true
    },
};
