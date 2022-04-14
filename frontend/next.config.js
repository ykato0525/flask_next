
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    },
  webpack: function (config) {
    config.module.rules.push([
      test: /\.md$/,
      use: "raw-loader",
    ])
    return config
  },
}
