const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

// environment dependent configuration
const PUBLIC_PATH = '/assets';
const ENTRY_POINT = './src/index.html';

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: ENTRY_POINT,
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
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
        publicPath: PUBLIC_PATH,
        serverSideRender: true,
        writeToDisk: true,
      },
    },
  plugins: [ new HtmlWebpackPlugin({ template: ENTRY_POINT }) ],
};


