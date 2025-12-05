// path — встроенный в Node.js модуль
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // Указываем путь до входной точки:
  entry: './src/main.js',
  // Генерировать source map
  devtool: 'source-map',
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'build'),
    // Имя файла со сборкой:
    filename: 'bundle.js',
    // Очистка перед сборкой
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'build')
        }
      ]
    })
  ]
};
