// https://github.com/webpack/docs/wiki/usage-with-bower

var path = require("path");
var webpack = require("webpack");
var bower_dir = path.resolve(__dirname, "bower_components");

var config = {
    entry: [
        "./src/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        noParse: [
            bower_dir + "/jquery/dist/jquery.js",
            bower_dir + "/react/react.js"
        ],
        loaders: [
            {
                test: /\.jsx?/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        alias: {
            "jquery": bower_dir + "/jquery/dist/jquery.js",
            "react": bower_dir + "/react/react.js"
        }
    }
};

module.exports = config;
