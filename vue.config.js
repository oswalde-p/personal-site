module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: 'pug-plain-loader',
        },
      ],
    },
    devServer: {
      allowedHosts: [
        '.local',
      ],
    },
  },
}
