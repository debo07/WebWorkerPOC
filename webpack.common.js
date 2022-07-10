const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: path.resolve(__dirname, "dist/index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
