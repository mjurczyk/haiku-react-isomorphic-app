const path = require('path');

const SRC = path.resolve(__dirname, 'client');
const DIST = path.resolve(__dirname, 'dist');
const SHARED = path.resolve(__dirname, 'shared/');

module.exports = {
    entry: SRC + '/index.js',
    output: {
        path: DIST,
        filename: 'client.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [ SRC, SHARED ],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: [ SRC, SHARED ],
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            'index.js'
        ]
    },
    devtool: 'source-map'
};
