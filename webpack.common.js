/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/vuetify/'),
          path.resolve('node_modules/material-design-icons-iconfont/'),
          path.resolve('node_modules/@fortawesome/'),
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  target: 'web',
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  optimization: {
    splitChunks: {
      maxSize: 409600,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
          priority: 1,
        },
        common: {
          name: 'common',
          chunks: 'all',
          enforce: true,
          priority: 0,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue2-Starter-Kit',
      template: 'index.html',
    }),
    new FileManagerPlugin({
      onStart: {
        delete: [
          './dist/',
        ],
      },
    }),
  ],
};
