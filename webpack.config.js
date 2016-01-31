var path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.elm$/,
        include: path.join(__dirname, 'src', 'elm'),
        loader: 'elm-webpack-loader'
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src', 'style'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ],

    noParse: /\.elm$/
  },

  resolve: {
    extensions: ['', '.js', '.elm', '.styl']
  },

  devServer: {
    contentBase: './',
    progress: true,
    stats: 'errors-only'
  }
};
