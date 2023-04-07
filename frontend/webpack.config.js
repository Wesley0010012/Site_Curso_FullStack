const path = require('path');

require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: ['./src/index.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'assets', 'dist'),
  },
};