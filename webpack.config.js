const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/scores': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/scores': '' },
      },
      '/leaderboard': {
        target: 'http://localhost:3000',
      },
      '/users': {
        target: 'http://localhost:3000',
      },
      '/login': {
        target: 'http://localhost:3000',
      },
      '/signup': {
        target: 'http://localhost:3000',
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
