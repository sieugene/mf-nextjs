const path = require("path");
const appRoot = require("app-root-path");

module.exports = {
  /**
   * Connecting an application in next config, takes in development mode and in build mode
   *
   * @param {string} name - name app
   * @param {string} entry - entry app
   * @param {boolean} isServer
   * @param {boolean} isBuild
   * @returns string
   */
  appConnector(name, entry, isServer, isBuild) {
    if (isServer) {
      const paths = `${appRoot}/${name}/.next/server/${
        isBuild ? "chunks/static" : "static"
      }/runtime/${entry}.js`;

      return paths;
    } else {
      return name;
    }
  },
};
