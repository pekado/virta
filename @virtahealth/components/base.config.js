const path = require("path");

module.exports = (options) => {
  return {
    entry: ["webrtc-adapter", "./src/index.ts"],
    mode: options.isProduction ? "production" : "none",
    stats: "minimal",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
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
      "react-intl": "react-intl",
      "react-native": "react-native",
      "react-dom": "react-dom",
      "react-native-svg": "react-native-svg",
      "@apollo/client": "@apollo/client",
      "styled-components/native": "styled-components/native",
    },
    resolve: {
      alias: {
        "react-native": "react-native-web",
      },
      extensions: [".web.tsx", ".tsx", ".ts", ".js"],
    },
  };
};
