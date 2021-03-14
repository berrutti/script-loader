const path = require('path');

module.exports = {
  entry: './src/embed.ts',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  output: {
    filename: 'embed.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production'
};