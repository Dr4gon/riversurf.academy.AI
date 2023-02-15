const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.html',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer:
    {
      historyApiFallback: true, // 404 gets routed back to index.html
      port: 9090,
      headers: {
        'Content-Security-Policy': 'font-src \'self\' data:; img-src \'self\' data:', // allows delivery of elements from same origin
      },
      devMiddleware: {
        index: true,
        mimeTypes: { phtml: 'text/html' },
        publicPath: '/woho',
        serverSideRender: true,
        writeToDisk: true,
      },
    },
  plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ],
};


