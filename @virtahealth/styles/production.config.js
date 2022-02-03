const configGenerator = require("./base.config.js");

// Generate base config
const config = configGenerator({ isProduction: true });

module.exports = config;
