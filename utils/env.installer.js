const envDev = require("../.env.js");
const envProd = require("../.env.production.js");

module.exports = {
  EnvInstaller: (process) => {
    const APP_ENV =
      process.env.APP_ENV === "development" ? "development" : "production";

    // if (APP_ENV === "development") {
    //   return { APP_ENV, ...envDev };
    // } else {
    return { APP_ENV, ...envProd };
    // }
  },
};
