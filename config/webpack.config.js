/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

BASE_PATH = path.resolve(__dirname, '../..');
PUBLIC_PATH = path.join(BASE_PATH, 'public/');

module.exports = [
  {
    name: 'main',
    entry: {
      main: './src/index.tsx',
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
          use: [
            {
              loader: 'style-loader', // Inyecta el CSS en la página
            },
            {
              loader: 'css-loader', // Traduce CSS en módulos CommonJS
            },
            // FIXME: npm audit resolves vulnerable packages
            // {
            //   loader: 'postcss-loader', // Accions PostCSS
            //   options: {
            //     postcssOptions: {
            //       plugins: () => [require('precss'), require('autoprefixer')],
            //     },
            //   },
            // },
            {
              loader: 'sass-loader', // Compila Sass en CSS
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.js', '.scss'],
    },
  },
  {
    name: 'dev',
    mode: 'development',
    output: {
      path: path.join(BASE_PATH, 'dist/'),
      filename: '[name].bundle.js',
      publicPath: '/dist/',
    },
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
    output: {
      path: path.join(PUBLIC_PATH, 'vendor/'),
      filename: '[name].bundle.js',
      publicPath: '/vendor/',
    },
    devtool: false,
  },
];
