const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const shareAll = mf.shareAll;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['auth-lib']
);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },    
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        
      // For hosts (please adjust)
      remotes: {
          // "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",
      },

      shared: {
        ...shareAll(
          { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
          
          /* this is the skip list. This package is not shared b/c */
          /* it's already needed in the main.ts */
          ['@angular-architects/module-federation', 'tslib']
        ),
        ...sharedMappings.getDescriptors()
      }

    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
