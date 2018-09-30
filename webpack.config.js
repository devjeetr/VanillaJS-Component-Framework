const HtmlWebPackPlugin = require("html-webpack-plugin");

const html_entry_point = "./src/html/index.html";
const html_output = "./index.html";

module.exports = {
  devtool: "source-map",
  entry: ["./src/js/index.js"],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        use: {
          loader: "eslint-loader",
          options: {
            emitWarning: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {minimize: true}
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Component-Framework"
    })
  ]
}