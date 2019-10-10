const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Happypack = require('happypack');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development';
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfigBase = {
  entry: {
    app: ['@babel/polyfill', resolve('../app/app.jsx')],
  },
  output: {
    path: resolve('../dist'),
    filename: 'common.bundle.js',
    chunkFilename: 'chunks/[name].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss'],
    alias: {
      'components': path.join(__dirname, '/../app/components'),
      'config$': path.join(__dirname, '/../app/config'),
      'pages': path.join(__dirname, '/../app/pages'),
      'store': path.join(__dirname, '/../app/store'),
      'lib': path.join(__dirname, '/../app/lib'),
      'style': path.join(__dirname, '/../app/style'),
      'storage$': path.join(__dirname, '/../app/lib/storage'),
      'common': path.join(__dirname, '/../app/common'),
      'media': path.join(__dirname, '/../app/media'),
      'ajax': path.join(__dirname, '/../app/ajax/ajax'),
      'plugins': path.join(__dirname, '/../app/plugins'),
      'erayt-mobile': path.join(__dirname, '../app/components/erayt-mobile/erayt-mobile'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx',
      },
      {
        test: /\.scss$/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'happypack/loader?id=scss',
        ],
      },
      {
        test: /\.css$/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'happypack/loader?id=css',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /iconfont.(woff|eot|ttf|svg|gif)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new Happypack({
      id: 'jsx',
      threads: 3,
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
            'transform-class-properties'],
          cacheDirectory: true,
        },
        include: resolve('app'),
      }],
    }),
    new MiniCssExtractPlugin({
      filename: 'app.min.css',
    }),
    new Happypack({
      id: 'scss',
      loaders: [{
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          publicPath: '../',
          includePaths: [
            path.resolve(__dirname, '../app/style/base'),
          ],
        },
      }],
    }),
    new Happypack({
      id: 'css',
      loaders: [{
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: [{
          publicPath: '../',
        }],
      }],
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../app/dll/lib_manifest.json'),
    }),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/template.html'),
    }),
  ],
};

module.exports = webpackConfigBase;
