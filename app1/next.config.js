const { withModuleFederation } = require("@module-federation/nextjs-mf");
const { EnvInstaller } = require("../utils/env.installer");

const env = EnvInstaller(process);

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  env,
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {},
      exposes: {
        "./cube": "./components/cube",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = `${env.HOST_SERVICE_APP1}/_next/`;
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
