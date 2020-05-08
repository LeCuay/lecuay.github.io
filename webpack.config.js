const path = require("path");

const PUBLIC_PATH = process.env.STATIC_URL || "/static/photography/dist/";

module.exports = {
	entry: {
		Photography: "./photography/src/renderPhotography.jsx"
	},
	output: {
		publicPath: PUBLIC_PATH,
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./static/photography/dist/"),
		chunkFilename: "[name].bundle.js",
	},
	devServer: {
		contentBase: "dist",
	},
	module: {
		rules: [
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	externals: {
		jquery: 'jQuery'
	}
};
