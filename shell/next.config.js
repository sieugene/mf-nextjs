const { withModuleFederation } = require("@module-federation/nextjs-mf");
const { EnvInstaller } = require("../utils/env.installer.js");
const path = require("path");

module.exports = {
  future: { webpack5: true },
  env: EnvInstaller(process),
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      mergeRuntime: true,
      name: "shell",
      library: { type: config.output.libraryTarget, name: "shell" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        app1: isServer
          ? path.resolve(
              __dirname,
              "../app1/.next/server/static/runtime/app1RemoteEntry.js"
            )
          : "app1", // for client, treat it as a global
        app2: isServer
          ? path.resolve(
              __dirname,
              "../app2/.next/server/static/runtime/app2RemoteEntry.js"
            )
          : "app2", // for client, treat it as a global
      },
      exposes: {},
      shared: [],
    };

    config.cache = false;
    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
