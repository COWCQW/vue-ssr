const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    alias: {
      "@components": path.resolve(__dirname, "../src/components"),
      "@assets": path.resolve(__dirname, "../src/assets")
    },
    modules: [
      path.resolve(__dirname, "../node_modules"),
      "node_modules"
    ]
  },
  module: {
    /*
      提高构建项目速度 
      https://webpack.js.org/configuration/module/#module-noparse
    */
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [{
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]'
              }
            }
          }
        }]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'media/[name].[hash:8].[ext]'
              }
            }
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [{
            resourceQuery: /\?vue/,
            use: 'pug-plain-loader'
          },
          {
            use: 'pug-loader'
          }
        ]
      },
      // js or jsx
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      // eslint
      {
        enforce: "pre",
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            extensions: [
              '.js',
              '.jsx',
              '.vue'
            ],
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}