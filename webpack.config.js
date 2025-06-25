module.exports = {
  mode: "production", //minimizuje u bundle fajl (ako stavim development, nece da minimizuje)
  entry: "./src/index.ts", //kaze webpack-u odakle da krene, i uzima importe (kao crawler)
  output: {
    filename: "main.js", //tu se pakuje bundle fajl
    //podrazumeva da je u dist folderu :)
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
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
