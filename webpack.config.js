const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8080,
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
}
