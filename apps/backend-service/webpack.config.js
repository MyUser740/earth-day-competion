const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');
const path = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/backend-service'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
    new DotenvPlugin({
      sample: path.join(__dirname, '../../example.env'),
      path:
        process.env.NODE_ENV === 'production'
          ? path.join(__dirname, '../../production.env')
          : path.join(__dirname, '../../development.env'),
    }),
  ],
};
