// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/nextjs' : ''

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/second": { page: "/second" },
    }
  },
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}