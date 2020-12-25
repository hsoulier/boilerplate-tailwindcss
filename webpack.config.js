require("dotenv").config()
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: process.env.MODE === "production" ? "production" : "development",
  entry: {
    app: "./src/js/index.js",
    style: "./src/js/style.js",
  },
  output: {
    filename: (pathData) => {
      console.log(pathData.chunk.files)
      return pathData.chunk.name === "main" ? "[name].js" : "js/[name].js"
    },
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: "/node_modules/",
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 800,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
}
