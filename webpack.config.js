const path = require('path');

module.exports = {
  entry: {
      main: './_scripts/main.js',
      home: './_scripts/home.js',
      post: './_scripts/post.js',
      404: './_scripts/404.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader' },
      { test: /\.sass$/, exclude: /(node_modules)/, use: ['raw-loader', 'sass-loader'] }
    ]
  }
}
