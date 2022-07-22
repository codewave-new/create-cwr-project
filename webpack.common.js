const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: { index: './src/index.js' },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!manifest.json'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new WebpackManifestPlugin({ fileName: './public/manifest.json' }),
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|ico)$/,
        use: 'url-loader?limit=100000',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: { extensions: ['.jsx', '.js'] },
};
