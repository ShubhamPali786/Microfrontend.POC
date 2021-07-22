const path = require('path');

module.exports = {
	entry: {
		productlist: path.resolve(__dirname, 'src/root/ProductList.jsx'),
		cartpage: path.resolve(__dirname, 'src/root/Cart.jsx')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'Scripts/Dist'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			 }
		],
	},
};
