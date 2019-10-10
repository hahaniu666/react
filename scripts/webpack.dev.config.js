const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config');

const PORT = 8888;

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfigDev = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../app'),
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: PORT,
    proxy: {
      // example
      // ivrouter: {
      //   target: 'http://test.hccb.cc:7070', // request url
      //   secure: false,
      // }
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMENT: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
