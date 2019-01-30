
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};


// This configures Webpack to do the following:

// Resolve source dependencies using examples/src/index.js as a starting point
// Use Babel to transpile .js and .jsx files via babel-loader
// Resolve CSS dependencies and inject inline styles via css-loader and style-loader
// Automatically inject a script reference to the bundle output in examples/src/index.html via html-webpack-plugin
// Serve the demo on port 3001