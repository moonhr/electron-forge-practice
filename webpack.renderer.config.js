const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/renderer.ts",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "dist"),
  },
};
