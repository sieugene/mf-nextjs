const { withModuleFederation } = require("@module-federation/nextjs-mf");
const { appConnector } = require("./utils/appConnector");
// const { EnvInstaller } = require("../utils/env.installer");

// const env = EnvInstaller(process);
const env = process.env;

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;

    const app1 = appConnector("app1", "app1RemoteEntry", isServer, !dev);
    const app2 = appConnector("app2", "app2RemoteEntry", isServer, !dev);

    const mfConf = {
      mergeRuntime: true,
      name: "shell",
      library: { type: config.output.libraryTarget, name: "shell" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        app1, // for client, treat it as a global
        app2, // for client, treat it as a global
      },
      exposes: {},
      shared: [],
    };

    config.cache = false;
    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    if (!isServer) {
      config.output.publicPath = `${env.HOST_SERVICE_CONTAINER}/_next/`;
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
