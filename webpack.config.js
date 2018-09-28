const path = require('path');

module.exports = {
    entry: './_scripts/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules)/,loader: 'babel-loader'}
        ]
    }
}