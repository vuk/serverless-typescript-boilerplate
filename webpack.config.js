const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
  mode: isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  watch: true,
  target: "node",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [],
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
