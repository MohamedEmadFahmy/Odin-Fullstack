const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js", // Entry point of your application
	output: {
		path: path.resolve(__dirname, "dist"), // Output directory
		filename: "bundle.js", // Output bundle filename
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: "My App", // Title of your HTML page
			template: "src/index.html", // Path to your HTML template (optional)
		}),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
