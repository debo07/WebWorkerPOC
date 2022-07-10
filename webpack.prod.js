const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].js",
        strictModuleExceptionHandling: true,
        crossOriginLoading: "anonymous",
    },
    stats: "errors-only",
});
