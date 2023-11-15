const path = require('path');
/**
 * npm install --save-dev html-webpack-plugin
 * 在执行构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有了 index.html 这个文件，
 * 但是 HtmlWebpackPlugin 还是会默认生成它自己的 index.html 文件。换言之，它会用新生成的 index.html 文件，替换原有文件。所有的 bundle 都自动添加到其中。
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  return {
    mode: 'development',
    entry: {
      index: './src/index.js',
      print: './src/print.js',
    },
    /**
     * 当 webpack 打包源代码时，可能会很难追踪到 error（错误）和 warning（警告）在源代码中的原始位置。例如 a.js b.js c.js 都打包到一个bundle.js，其中一个源文件有异常，无法定位是哪一个源文件
     * JavaScript 提供了 source map 功能，可以将编译后的代码映射回原始源代码。source map 会直接告诉你错误来源于哪一个源代码。
    */
    devtool: 'inline-source-map',
    /**
     * webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下（译注：serve 意即将资源作为 server 的可访问文件）
    */
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Caching'
      }),
    ],
    output: {
    /**
     * 保证文件内容变化时，文件名称随之变化，才能保证浏览器不走缓存
    */
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      /**
       * webpack 将生成文件并放置在 /dist 文件夹中，但是它不会追踪哪些文件是实际在项目中用到的。
       * 通常比较推荐的做法是，在每次构建前清理 /dist 文件夹，这样只会生成用到的文件。可以使用 output.clean 配置项实现这个需求。
      */
      clean: true,
      /**
       * 确保 middleware（中间件）功能能够正确启用
      */
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
          // include: path.resolve(__dirname, 'src') 提高性能，仅作用于 src 文件下
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
    /**
     * 由于在这个示例中单个 HTML 页面有多个入口，所以添加了 optimization.runtimeChunk: 'single' 配置
    */
    optimization: {
      runtimeChunk: 'single',
        splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
  }
};