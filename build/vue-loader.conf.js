var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
    loaders:[
     
      {
          test: /\.stylus$/,
          use: ['style-loader','css-loader','postcss-loader', 'stylus-loader']
      },
      {
        test:/\.jade/,
        loader:'jade-loader'
      }
  ]
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
