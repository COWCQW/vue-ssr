const path = require("path")
const merge = require("webpack-merge")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const baseWebpackConfig = require("./webpack.base")
const createOneOf = require("./util")


const webpackDevConfig = {
  mode: "development",
  entry: path.resolve(__dirname,"../src/client"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.pug"),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback:true,
    proxy: {},
  },
  module: {
    rules: [
      // css or post css
      {
        test: [/\.css$/, /\.p(ost)?css$/],
        oneOf: createOneOf("css","normal")
      },
      // scss or sass
      {
        test: /\.s(c|a)ss$/,
        oneOf: createOneOf("sass","normal")
      },
      // less
      {
        test: /\.less$/,
        oneOf: createOneOf("less","normal")
      },
      // stylus or styl
      {
        test: /\.styl(us)?$/,
        oneOf: createOneOf("stylus","normal")
      }
    ]
  }
}

module.exports = merge(baseWebpackConfig, webpackDevConfig)