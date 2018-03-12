// require --------------------------------------------------------------------

var path            = require("path");
var webpack         = require("webpack");
var minifyPlugin    = require("babel-minify-webpack-plugin");

// exports --------------------------------------------------------------------

module.exports = {

    // entry ------------------------------------------------------------------

    entry: "./src/combo.js",

    // output -----------------------------------------------------------------

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "combo.js",
        library: "Combo",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    // plugins ---------------------------------------------------------------

    plugins: [
        new minifyPlugin()
    ],

    // module -----------------------------------------------------------------

    module: {
        loaders: [
            {
                test: /\.js$/,
            	exclude: /node_modules/,
                loader: "string-replace-loader",
                query: {
                    search: "$VERSION",
                    replace: "3.2.0"
                }
            },
            {
                test: /\.js$/,
            	exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
            	test: /\.js$/,
            	exclude: /node_modules/,
            	loader: "eslint-loader"
            }
        ]
    }
}


