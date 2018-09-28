const path = require('path');
const TerserJsPlugin = require('terser-webpack-plugin');
const packageJson = require('./package.json')

const isProd = process.env.NODE_ENV === 'production';

const calcPackageName = (packageJsonName) => packageJsonName.replace("@", "").replace("/", "-");
const calcRootName = (pkgName) => pkgName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/ /g, "");

const pkgName = calcPackageName(packageJson.name);
const rootName = calcRootName(pkgName);

const orgName = packageJson.name.indexOf("@") === 0 ? packageJson.name.split("/")[0] : undefined;
const externals = [];

if (orgName) {
    externals.push(new RegExp(`^(${orgName})`));
}

externals.push("ffi");

module.exports = {
    entry: path.resolve(__dirname, './dist.es6/index.js'),
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
    externals,
    mode: isProd ? "production" : "development",
    devtool: isProd ? undefined : "inline-source-map",
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
    optimization: {
        minimizer: isProd ? [ new TerserJsPlugin() ] : []
    }
};
