const path = require('path');

module.exports = {
    entry: './_scripts/index.es6',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    module: {
        rules: [
            { test: /\.es6$/, exclude: /(node_modules)/,loader: 'babel-loader'}
        ]
    }
}