/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

BASE_PATH = path.resolve(__dirname, '../');
PUBLIC_PATH = path.join(BASE_PATH, 'docs/');

module.exports = [
  {
    name: 'main',
    entry: {
      main: './src/index.tsx',
    },
    output: {
      path: path.join(PUBLIC_PATH, 'vendor/'),
      filename: '[name].bundle.js',
      publicPath: '/vendor/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: [/\.tsx$/, /\.ts$/],
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
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
  },
  {
    name: 'prod',
    mode: 'production',
    devtool: false,
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'lecuay.css',
      }),
    ],
  },
];
