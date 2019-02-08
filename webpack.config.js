const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ],

  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },

  // devServer: {
  //   contentBase: './dist'
  // }
}

module.exports = config;
