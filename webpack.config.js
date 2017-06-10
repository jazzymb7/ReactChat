//this file runs our code
var webpack = require('webpack');
var path = require('path');

module.exports = {
	//the react code that we write,(take the code bundle and put result in output)
	entry:{
		app: './src/app.js'
	},
	output:{
		filename: 'public/build/bundle.js',
		//sourceMapFileName: 'public/build/bundle.map' //for debugging if something goes wrong
	},
	devtool: '#source-map',
	//how to transpile the code, webpack tells babel
	module: {
		loaders: 
		[
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader', //before it was only babel
				query: {
					presets: ['react','es2015']
				}
			}
		]
	}
}