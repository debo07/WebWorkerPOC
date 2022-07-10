const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: path.resolve(__dirname, "dist/index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: [/node_modules/, /\.worker.js$/],
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.worker.js$/,
                exclude: /(node_modules)/,
                type: "asset/resource",
                generator: {
                    filename: "js/workers/[hash][ext][query]",
                },
            },
        ],
    },
};
