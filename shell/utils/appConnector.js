const path = require("path");

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
      return path.resolve(
        __dirname,
        `../../${name}/.next/server/${
          isBuild ? "chunks/static" : "static"
        }/runtime/${entry}.js`
      );
    } else {
      return name;
    }
  },
};
