const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack, EnvironmentPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  resolve:{
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo list App",
      filename: "index.html",
      template: "./src/template.html",
    }),
    new EnvironmentPlugin({
      API_KEY: "HJJW98N3NL4XVEPAVAVNCUWV7",
    }),
  ],
};
