const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.jsx"],
  output: {
    path: path.resolve("dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          configFile: ".eslintrc",
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [["es2015", { modules: false }]],
            },
          },
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["react"],
              plugins: ["transform-class-properties", "react-hot-loader/babel"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "file-loader",
        query: {
          limit: 10000,
          name: "fonts/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
        loader: "file-loader",
        query: {
          limit: 10000,
          name: "images/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: "url",
        query: {
          limit: 10000,
          name: "media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  devServer: {
    inline: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), HtmlWebpackPluginConfig],
};
