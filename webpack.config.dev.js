var path = require('path');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var lost = require('lost');
var poststylus = require('poststylus');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
      },
      {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'],
      },
      {
      test: /\.styl$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'stylus-loader']
      },
    ],
  },
  postcss: [
    lost, rucksack({
      autoprefixer: true
    })
  ],
  stylus: {
    use: [
      poststylus(['lost', 'autoprefixer', 'rucksack-css'])
    ]
  }
};
