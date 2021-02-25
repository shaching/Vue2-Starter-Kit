/* eslint-disable import/no-extraneous-dependencies */
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new HtmlMinimizerPlugin({
        parallel: true,
      }),
      new JsonMinimizerPlugin(),
    ],
  },
  devtool: 'source-map',
});
