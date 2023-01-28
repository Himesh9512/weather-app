const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
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
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Know your weather!",
      favicon: './src/assets/favicon/favicon.png',
    }),
  ],
};
