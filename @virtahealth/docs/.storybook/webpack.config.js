const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");
const join = path.join;

const aliasPathJoin = (moduleFolders) =>
  join(process.cwd(), "..", "..", "node_modules", join(...moduleFolders));

module.exports = async ({ config }) => {
  /**
   * this TS config matches the one from the standard babel config
   * for the docs package
   */
  config.module.rules.push({
    test: /node_modules\/react-native-collapsible/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          [
            "@babel/plugin-proposal-class-properties",
            {
              loose: true,
            },
          ],
          [
            "@babel/plugin-proposal-private-property-in-object",
            {
              loose: true,
            },
          ],
          [
            "@babel/plugin-proposal-private-methods",
            {
              loose: true,
            },
          ],
        ],
      },
    },
  });
  config.module.rules.push({
    test: /node_modules\/react-native-card-flip/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          [
            "@babel/plugin-proposal-class-properties",
            {
              loose: true,
            },
          ],
          [
            "@babel/plugin-proposal-private-property-in-object",
            {
              loose: true,
            },
          ],
          [
            "@babel/plugin-proposal-private-methods",
            {
              loose: true,
            },
          ],
        ],
      },
    },
  });

  config.resolve.extensions.push(".ts", ".tsx", ".js");
  config.resolve.alias["react-native$"] = "react-native-web";
  config.resolve.alias["./ReactNativeSVG"] = aliasPathJoin([
    "react-native-svg",
    "lib",
    "module",
    "ReactNativeSVG.web.js",
  ]);
  config.resolve.alias["styled-components$"] = "styled-components/native";

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
