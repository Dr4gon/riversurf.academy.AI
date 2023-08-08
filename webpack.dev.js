const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const smp = new SpeedMeasurePlugin();

// environment dependent configuration
const PUBLIC_PATH = '/'; // this '/' setting opens up the full path afterward for flexible navigation including set headers
const ENTRY_POINT = './src/index.html';
const NODE_MODULES_PATH = /node_modules/;

module.exports = smp.wrap({
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/main.js',
      './src/assets/main.css'
    ],
  },
  output: {
    filename: '[name].js', // the name tag avoids conflicts in the chunking optimization
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
  },
  resolve: { // https://stackoverflow.com/questions/40565361/what-does-resolve-extensions-do-in-webpack
    extensions: [ '', '.mts', '.vue', '.ts', '.mjs', '.js', '.html', '.json', '.scss', '.css', 'svg' ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'vue-style-loader'},
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/i,
        exclude: NODE_MODULES_PATH,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env', { targets: "defaults" } ]
            ]
          }
        }
      },
      {
        test: /\.m?ts$/,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true // deactivates type-checking for faster build time
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
    new VueLoaderPlugin(),
  ],
});


