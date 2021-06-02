const path = require('path');

const browserConfig = {
    entry: './src/index.ts',
    output: {
        filename: 'f0.js',
        library: {
            name: "F0",
            type: "umd",
        },
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    name: "browser",
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.js']
    },
}

const nodeConfig = {
    entry: './src/index.ts',
    output: {
        filename: 'node-f0.js',
        library: {
            name: "F0",
            type: "commonjs",
        },
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    name: "node",
    watchOptions: {
        ignored: /node_modules/
    },
    externals: {
        'node-fetch': {
            commonjs: 'node-fetch',
            amd: 'node-fetch',
            root: 'fetch',
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.js']
    },
}


module.exports = [browserConfig, nodeConfig];