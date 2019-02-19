/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  devtool: '#eval-source-map',
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
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/vuetify/'),
          path.resolve('node_modules/material-design-icons-iconfont/'),
          path.resolve('node_modules/@fortawesome/'),
        ],
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
});
