const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
    ],
  },

  plugins: [HtmlWebpackPluginConfig],
};
