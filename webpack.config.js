const path = require("path");
const webpack = require("webpack");
const devBuild = process.env.NODE_ENV || "development";
const config = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: "development" })],
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: "svg-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    publicPath: "/dist/"
  }
};

module.exports = config;

if (devBuild) {
  console.log("Webpack dev build for Rails"); // eslint-disable-line no-console
  module.exports.devtool = "eval-source-map";
} else if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else {
  console.log("Webpack production build for Rails"); // eslint-disable-line no-console
}
