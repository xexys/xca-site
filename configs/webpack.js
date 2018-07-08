const path = require('path');

const clientConfig = {
    entry: './src/entries/site.js',
    output: {
        path: path.resolve('./dist/client'),
        filename: 'site.js',
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

    devtool: 'source-map',
};


module.exports = clientConfig;
