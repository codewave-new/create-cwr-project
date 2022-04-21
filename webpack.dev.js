const { merge } = require('webpack-merge');
const openBrowser = require('react-dev-utils/openBrowser');
const common = require('./webpack.common');

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    onListening: () => {
      openBrowser(`http://${host}:${port}`);
    },
    port,
    host,
  },
});
