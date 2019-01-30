const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function createBaseCssLoaderConfig(mode) {
  return [
    {
      resourceQuery: /module/,
      use: [{
          loader: mode === 'normal' ? 
            'vue-style-loader' : MiniCssExtractPlugin.loader,
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            importLoaders: 2,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    {
      resourceQuery: /\?vue/,
      use: [
        /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
        {
          loader: mode === 'normal' ? 
            'vue-style-loader' : MiniCssExtractPlugin.loader,
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('vue').use('css-loader') */
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    {
      test: /\.module\.\w+$/,
      use: [
        /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
        {
          loader: mode === 'normal' ? 
            'vue-style-loader' : MiniCssExtractPlugin.loader,
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            importLoaders: 2,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    {
      use: [{
        loader: mode === 'normal' ? 
        'vue-style-loader' : MiniCssExtractPlugin.loader,
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    }
  ]

}

function createOneOf(type, mode) {
  const baseCssLoaderConfig = createBaseCssLoaderConfig(mode)
  if (type === "css")
    return baseCssLoaderConfig
  const loader = {
    loader: `${type}-loader`,
    options: {
      sourceMap: false
    }
  }
  return baseCssLoaderConfig.reduce((init, cur) => {
    const use = cur.use.concat(loader)
    init.push({
      ...cur,
      use
    })
    return init
  }, [])
}
module.exports = createOneOf