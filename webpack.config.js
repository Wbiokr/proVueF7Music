var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin=require('extract-text-webpack-plugin')
const ipv4=require('ipv4')



module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: 'script/build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders:[
            {
              test: /\.stylus/,
              use: ExtractTextPlugin.extract({
                fallback:'vue-style-loader',
                use:['css-loader','stylus-loader']
              })
            }
          ]
        }
      },
      {
        test:/\.stylus/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','stylus-loader']
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port:Math.floor(Math.random()*10000),
    host:ipv4||'127.0.0.1'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins:[
    new ExtractTextPlugin({
      filename:'style/app.css'
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#cheap-source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    
  ])
}
