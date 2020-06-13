const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const apiMocker = require("mocker-api");

module.exports = {
  devServer: {
    port: 3000,
    before(app) {
      apiMocker(app, path.resolve("./mock/index.js"));
    },
  },
  entry: "./src/index",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
