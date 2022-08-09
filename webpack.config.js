const path = require("path");
// const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		// this is to have aliases for imports
		alias: {
			"@hooks": path.resolve(__dirname, "src/hooks/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		// new Dotenv(),
		new MiniCssExtractPlugin({
			filename: "assests[name].css",
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 3005,
		open: true,
		historyApiFallback: true,
	},
	devtool: "source-map",
};
