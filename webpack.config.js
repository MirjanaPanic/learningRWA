const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/observables.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"], //import bez ekstenzije
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map", //debug u browseru, unbundle
};
