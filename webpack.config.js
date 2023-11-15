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
  module: {
  rules: [
    /**
     * 要想在 JavaScript 模块中 import CSS 文件，需要安装 style-loader (暂时不用) 和 css-loader，(或者额外使用一些loader 例如：less-loader)并在 module 配置 中添加这些 loader：
     * npm install --save-dev style-loader css-loader
     * npm install less less-loader --save-dev  |  yarn add -D less less-loader
    */
      {
        test: /\.css\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      /**
       * 假如，现在正在下载 CSS，但是像 background 和 icon 这样的图像应该如何处理呢？在 webpack 5 中，使用内置的 Asset Modules 便可以轻松地将这些内容混入我们的系统中:
      */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /**
       * 使用 Asset Modules 可以接收并加载任何文件，然后将其输出到构建目录。换言之，我们可以将它们用于任何类型的文件，也包括字体。
      */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
   optimization: {
    runtimeChunk: 'single',
  },
};