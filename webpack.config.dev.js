const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: ['./index.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dev')
    },
    resolve: {
        modules: ['../node_modules'],
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html',
            filename: 'index.html'
        }),
        ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 9000,
        open: true
    },
};
