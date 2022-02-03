const path = require("path");

module.exports = (options) => {
  return {
    entry: ["whatwg-fetch", "image-capture", "./src/index.ts"],
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
          test: /\.(png|jpe?g|gif)$/i,
          use: "file-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: ["transform-class-properties"],
            },
          },
          include: /node_modules\/react-native-collapsible/,
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: ["transform-class-properties"],
            },
          },
          include: /node_modules\/react-native-card-flip/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: "experiences",
      libraryTarget: "umd",
    },
    externals: {
      "@virtahealth/components": "@virtahealth/components",
      "@apollo/client": "@apollo/client",
      formik: "formik",
      react: "react",
      "react-dom": "react-dom",
      "react-intl": "react-intl",
      "react-native": "react-native",
      "react-native-svg": "react-native-svg",
    },
    resolve: {
      alias: {
        "react-native": "react-native-web",
      },
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
