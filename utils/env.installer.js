const env = require("../.env.js");

module.exports = {
  EnvInstaller: (process) => {
    const APP_ENV =
      process.env.APP_ENV === "development" ? "development" : "production";
    return { APP_ENV, ...env };
  },
};
