var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/main.jsx',
  output: {
    path: path.resolve(__dirname, 'server/public/build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
}