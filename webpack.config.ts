const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
// module.exports = {
//   mode: 'production',
//   entry: './src/index.ts',
//   devtool: 'source-map',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, './dist'),
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", "jsx"]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /nodeModules/,
//         use: {
//           loader: 'ts-loader'
//         },
//       },
//     ],
//   },
// };


// module.exports = {
//   mode: 'production',
//   entry: './src/index.ts',
//   devtool: 'source-map',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, './dist'),
//   },
//
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /nodeModules/,
//         use: {
//           loader: 'babel-loader'
//         },
//       },
//     ],
//   },
// };