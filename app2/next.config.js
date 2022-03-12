const { withModuleFederation } = require("@module-federation/nextjs-mf");
// const { EnvInstaller } = require("../utils/env.installer");

// const env = EnvInstaller(process);
const env = process.env

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app2",
      library: {
        type: config.output.libraryTarget,
        name: "app2",
      },
      filename: "static/runtime/app2RemoteEntry.js",
      remotes: {},
      exposes: {
        "./prisma": "./components/prisma",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = `${env.HOST_SERVICE_APP2}/_next/`;
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
