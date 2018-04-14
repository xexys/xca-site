const path = require('path');

const clientConfig = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('./dist/client'),
        filename: 'index.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                },
            },
        ],
    },
};


module.exports = clientConfig;
