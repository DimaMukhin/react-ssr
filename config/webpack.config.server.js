const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var serverConfig = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }
  
  module.exports = serverConfig;