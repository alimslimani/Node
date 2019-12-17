import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
     vendor:path.resolve(__dirname,'src/vendor'),
     main:path.resolve(__dirname, 'src/index')
  },  
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'vendor'
        }
      }
    },
    runtimeChunk: true
  },
  mode: 'production',
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpackMd5Hash(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    }),
    // Eliminate duplicate package when generating budle
    new UglifyJsPlugin({
        uglifyOptions: {
        warnings: false,
        ie8: false,
        output: {
        comments: false
                }
                      }
      }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    ]
  }
};
