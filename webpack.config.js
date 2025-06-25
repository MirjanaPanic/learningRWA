module.exports = {
  mode: "production", //minimizuje u budle fajl (ako stavim development, nece da minimizuje)
  entry: "./src/index.js", //kaze webpack-u odakle da krene, i uzima importe
  output: {
    filename: "main.js", //tu se pakuje bundle fajl
  },
  module: {
    rules: [
      {
        test: /\.js$/, //regex
        exclude: /node_modules/,
        use: ["babel-loader"], //veza izmedju webpack i babel
      },
    ],
  },
};
