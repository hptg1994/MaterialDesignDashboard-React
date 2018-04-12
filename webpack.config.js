const path = require('path')
const webpack = require('webpack')
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
      path: path.join(__dirname,'public','dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules:[{
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude:/node_modules/
      },{
        test:/\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },{
        test:/\.svg$/,
        use: 'svg-loader'
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'public'),
      historyApiFallback:true,
      publicPath: '/dist/'
    }
  };
};