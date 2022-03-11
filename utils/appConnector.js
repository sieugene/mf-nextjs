const { dirname } = require("path");
const appRoot = dirname(require.main.filename);

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
      const appPath = path.resolve(
        __dirname,
        `../${name}/.next/server/${
          isBuild ? "chunks/static" : "static"
        }/runtime/${entry}.js`
      );
      console.log(appPath, "------ app -----");
      return appPath;
    } else {
      return name;
    }
  },
};
