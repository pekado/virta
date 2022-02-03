const path = require("path");

module.exports = (options) => {
  return {
    entry: "./src/index.ts",
    mode: options.isProduction ? "production" : "none",
    stats: "minimal",
    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: "styles",
      libraryTarget: "umd",
      globalObject: "this",
    },
    resolve: {
      extensions: [".ts"],
    },
  };
};
