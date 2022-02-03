// most of the Atlas packages use `react-hot-loader` so add it to the
// base config here, so we don't have to do it in each package

module.exports = {
  ...require("./configs/src/babel.config.js"),
  env: {
    development: {
      plugins: ["react-hot-loader/babel"],
    },
  },
};
