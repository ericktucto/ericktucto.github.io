const path = require('path');

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
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 }
          },
          'postcss-loader',
        ],
        exclude: /\.module\.s?(c|a)ss$/,
      },
    ],
  },
};
