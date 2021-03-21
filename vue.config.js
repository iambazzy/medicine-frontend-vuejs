
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      }
    }
  }
}
