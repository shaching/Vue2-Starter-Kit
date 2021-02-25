/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { isProduction } = require('webpack-mode');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill/noConflict', './src/main.js'],
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
        test: /\.vue$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [path.resolve('src'), path.resolve('node_modules/vuetify/dist/')],
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '',
                },
              }
            : 'vue-style-loader',
          'css-loader',
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
      events: {
        onStart: {
          delete: ['./dist/'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ESLintPlugin(),
  ],
};
