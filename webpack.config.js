/* global require __dirname TerserPlugin module */

const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const LIBRARY_NAME = 'fusebar'

const rawJS = {
  target: 'web',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [{
      test: /\.?(j|t)s$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${LIBRARY_NAME}.js`,
    library: 'fusebar',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: 'none',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
}

const minJS = {
  target: 'web',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [{
      test: /\.?(j|t)s$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${LIBRARY_NAME}.min.js`,
    library: 'fusebar',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false
    })]
  }
}

const devJS = {
  target: 'web',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [{
      test: /\.?(j|t)s$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${LIBRARY_NAME}.dev.js`,
    library: 'fusebar',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: 'development',
  devtool: 'inline-source-map'
}

module.exports = [ rawJS, minJS, devJS ]

