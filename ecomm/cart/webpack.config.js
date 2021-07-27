const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        compress: true,
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remote-cart-entry.js",
            exposes: {
                "./CartIndex": "./src/index",
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