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
        libraryTarget: 'umd',
        libraryExport: undefined,
        library: {
            root: rootName,
            amd: packageJson.name,
            commonjs: packageJson.name
        },
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: "node",
    externals: {
        "ffi": "ffi"
    },
    mode: isProd ? "production" : "development",
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
        fs: "empty",
        path: "empty",
        console: false,
        global: false,
        process: false,
        __filename: false,
        __dirname: false,
        Buffer: false,
        setImmediate: false
    },
    plugins
};
