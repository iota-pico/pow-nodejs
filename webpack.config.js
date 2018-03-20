const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const packageJson = require('./package.json')

const isProd = process.env.NODE_ENV === 'production';

const plugins = [];
if (isProd) {
    plugins.push(new UglifyJsPlugin());
}

const pkgName = packageJson.name.replace("@", "").replace("/", "-");

const rootName = pkgName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/ /g, "");

module.exports = {
    entry: path.resolve(__dirname, './dist/index.js'),
    output: {
        path: path.resolve(__dirname, './pkg'),
        filename: pkgName + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
        library: {
            root: rootName,
            amd: packageJson.name,
            commonjs: packageJson.name
        },
        umdNamedDefine: true
    },
    target: "node",
    externals: {
        "ffi": "ffi",
        "big-integer": {
            "amd": "big-integer",
            "commonjs": "big-integer",
            "commonjs2": "big-integer",
            "root": "bigInt"
        }
    },
    //mode: isProd ? "production" : "development",
    devtool: isProd ? undefined : "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env"
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "helpers": false,
                                    "polyfill": false,
                                    "regenerator": true
                                }
                            ],
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    "globals": ["Error"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    plugins
};
