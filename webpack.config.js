const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    main: './_scripts/main.ts',
    home: './_scripts/home.ts',
    post: './_scripts/post.ts',
    404: './_scripts/404.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset/source',
      },
      {
        test: /\.s[ac]ss$/,   // matchea .sass Y .scss
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader',        // detecta .sass=indentado, .scss=llaves por la extensión
        ],
        exclude: /\.module\.s[ac]ss$/,
      },
      {
        test: /\.css$/,        // Tailwind, sin sass-loader
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack',
      alwaysNotify: true,
      contentImage: undefined,
    }),
  ],
  watchOptions: {
    ignored: ['**/node_modules', '**/_site/**', '**/assets/js/**', '**/assets/css/**'],
  },
};
