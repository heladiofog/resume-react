const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconWebPackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // punto de entrada
  output: { // a donde se empujará el proyecto
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // con qué archivos vamos a trabajar
  resolve: {
    extensions: ['.jsx',  '.js']
  },
  // reglas del projecto
  module: {
    rules: [
      { // qué archivos vamos a necesitar
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { // Identificar y preparar archivos html
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  // Generar lo que se envía a producción
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      file: "./index.html",
    }),
    new FaviconWebPackPlugin('./public/di.png'),
  ]
}
