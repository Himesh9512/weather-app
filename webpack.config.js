const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
    ],
  },
};
