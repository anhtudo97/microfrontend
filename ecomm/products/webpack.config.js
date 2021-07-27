const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        compress: true,
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remote-product-entry.js",
            exposes: {
                "./ProductsIndex": "./src/index",
            },
            shared: {
                faker: {
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};