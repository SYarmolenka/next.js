const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/second": { page: "/second" },
    }
  },
  assetPrefix: !debug ? 'https://syarmolenka.github.io/next-gh-page-example/' : '',
}