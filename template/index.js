/**
 * Dependencies
 */
const { join } = require("path");

module.exports = {
  defaultValues: {
    customScripts: {
      "new-block":
        "cd blocks && npx @wordpress/create-block@latest --template @ryanwelcher/multi-block-template --no-plugin",
      start: "wp-scripts start --webpack-src-dir=blocks",
      build: "wp-scripts build --webpack-src-dir=blocks",
    },
    transformer: (view) => {
      return {
        ...view,
        folderName: `blocks/${view.slug}`, // Put the block in a folder with the slug name
      };
    },
  },
  pluginTemplatesPath: join(__dirname, "files/plugin"),
  blockTemplatesPath: join(__dirname, "files/block"),
};
