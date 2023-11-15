const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src/app.html',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
     publicPath: '/',
  },
   optimization: {
    runtimeChunk: 'single',
  },
};