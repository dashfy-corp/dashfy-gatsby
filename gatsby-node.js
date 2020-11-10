/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "components": path.resolve(__dirname, "src/components"),
        "pages": path.resolve(__dirname, "src/pages"),
        "views": path.resolve(__dirname, "src/views"),
        "assets": path.resolve(__dirname, "src/assets"),
        "variables": path.resolve(__dirname, "src/variables")
      }
    }
  });
};
