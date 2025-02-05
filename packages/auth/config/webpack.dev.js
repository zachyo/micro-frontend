const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  output: {
    publicPath : 'http://localhost:8082/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared : ['react', 'react-dom']
    //   shared: packageJson.dependencies,

    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// devConfig overrides any commonConfig properties that are the same
module.exports = merge(commonConfig, devConfig);
