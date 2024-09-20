const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿으로 사용할 HTML 파일
      filename: "index.html", // 출력할 HTML 파일 이름
      inject: "body", // 스크립트를 <body> 끝에 삽입
    }),
  ],
};
