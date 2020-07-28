module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'ページタイトル'
    }
  },
  publicPath: './',
  chainWebpack: (config) => {
    config.module
      .rule("text")
      .test(/\.txt$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  transpileDependencies: [
    'vuetify'
  ]
}
