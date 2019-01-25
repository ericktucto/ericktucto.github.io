const path = require('path');

module.exports = {
    entry: {
        main: './_scripts/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules)/,loader: 'babel-loader'}
        ]
    }
}
