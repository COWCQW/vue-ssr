const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseWebpackConfig = require("./webpack.base")
const createOneOf = require("./util")
const prodWebpackClientConfig = {
  mode:"production",
  entry: {
    main:path.resolve(__dirname,"../src/client"),
  },
  output:{
    path:path.resolve(__dirname,"../server/client"),
    filename:"js/[name].[chunkhash:8].bundle.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      // css or post css
      {
        test: [/\.css$/, /\.p(ost)?css$/],
        oneOf: createOneOf("css","production")
      },
      // scss or sass
      {
        test: /\.s(c|a)ss$/,
        oneOf: createOneOf("sass","production")
      },
      // less
      {
        test: /\.less$/,
        oneOf: createOneOf("less","production")
      },
      // stylus or styl
      {
        test: /\.styl(us)?$/,
        oneOf: createOneOf("stylus","production")
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.pug"),
    }),
    new MiniCssExtractPlugin({
      // 输出主文件的文件名
      filename: "css/[name].[chunkhash:8].bundle.css",
      // 异步模块的默认文件名
      chunkFilename: "css/async.[name].[chunkhash:8].bundle.css"
    })
  ]
}
module.exports = merge(baseWebpackConfig,prodWebpackClientConfig)