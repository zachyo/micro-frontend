const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      'Access-Control-Allow-Origin' : '*'
    }
  },
  output: {
    publicPath : 'http://localhost:8083/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap",
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
