const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath : '/auth/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
