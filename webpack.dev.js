/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    contentBase: 'dist',
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: false,
    writeToDisk: true,
    port: 8080,
  },
});
