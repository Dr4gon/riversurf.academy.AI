const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// environment dependent configuration
const PUBLIC_PATH = '/assets';
const ENTRY_POINT = './src/index.html';

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    polyfills: './src/polyfills.ts', // necessary for delivery of zone.js to the bundle
    main: './src/main.ts',
  },
  output: {
    filename: '[name].js', // the name tag avoids conflicts in the chunking optimization
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: [ '', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
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
  plugins: [
    new HtmlWebpackPlugin({ template: ENTRY_POINT }),
    new CleanWebpackPlugin({}), // clean local dist folder
  ],
};


