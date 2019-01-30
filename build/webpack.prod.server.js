const path = require("path")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base")
const createOneOf = require("./util")
const prodWebpackClientConfig = {
  mode:"production",
  target:"node",
  entry: {
    
    main:path.resolve(__dirname,"../src/server"),
  },
  output:{
    libraryTarget: 'commonjs2',
    path:path.resolve(__dirname,"../server"),
    filename:"server.bundle.js"
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
  },
}
module.exports = merge(baseWebpackConfig,prodWebpackClientConfig)