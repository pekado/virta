const path = require("path");

module.exports = (options) => {
  return {
    entry: "./src/index.ts",
    mode: options.isProduction ? "production" : "none",
    stats: "minimal",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          // process the web hooks package to make sure it's proper ES5
          exclude: /node_modules\/(?!react-native-web-hooks)/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: "components",
      libraryTarget: "umd",
      globalObject: "this",
    },
    externals: {
      formik: "formik",
      react: "react",
      "react-dom": "react-dom",
      "react-intl": "react-intl",
      "react-native": "react-native",
      "@apollo/client": "@apollo/client",
      "@apollo/client/testing": "@apollo/client/testing",
      "styled-components/native": "styled-components/native",
    },
    resolve: {
      alias: {
        "react-native": "react-native-web",
        "react-native-svg": "react-native-svg-web",
      },
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
