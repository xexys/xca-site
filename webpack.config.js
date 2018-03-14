const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'script.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    }
};