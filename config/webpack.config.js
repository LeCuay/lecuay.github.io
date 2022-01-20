/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

BASE_PATH = path.resolve(__dirname, '../');
SOURCE_PATH = path.join(BASE_PATH, 'src/');
PUBLIC_PATH = path.join(BASE_PATH, 'docs/');

module.exports = [
  {
    name: 'main',
    entry: {
      main: './src/index.tsx',
    },
    output: {
      path: path.join(PUBLIC_PATH, 'vendor/'),
      filename: 'littlegarden.bundle.js',
      publicPath: '/vendor/',
      clean: true,
      chunkFilename: '[name].[contenthash:8].bundle.js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/littlegarden.css',
      }),
    ],
    module: {
      rules: [
        {
          test: [/\.tsx$/, /\.ts$/],
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext][query]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      alias: {
        components: path.join(SOURCE_PATH, 'components/'),
        static: path.join(SOURCE_PATH, 'static/'),
      },
    },
    performance: {
      assetFilter: (assetFilename) => !/\.(map|css|png)$/.test(assetFilename),
    },
  },
  {
    name: 'dev',
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      static: {
        directory: PUBLIC_PATH,
      },
    },
    optimization: { moduleIds: 'named' },
  },
  {
    name: 'prod',
    mode: 'production',
    devtool: false,
  },
];
