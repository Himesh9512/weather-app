const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "production",
	devServer: {
		static: "./dist/",
		liveReload: true,
		open: {
			app: {
				name: "firefox",
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve("src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: ">0.25%" }]],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
