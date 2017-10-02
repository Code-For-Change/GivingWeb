const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
	entry: { app: `${__dirname}/src/giving-web.js` },
	output: {
		path: `${__dirname}/build`,
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
    // new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      inject: 'body',
      filename: 'index.html'
    }),
    new DashboardPlugin()
  ],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
      {
        test: /\.(png|jpg|ttf)$/,
        use: [
         	{ loader: 'url-loader', options: { limit: 5000192 } }
        ]
      }
		]
	}
}

module.exports = config