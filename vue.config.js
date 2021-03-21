// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    // plugins: [ new BundleAnalyzerPlugin() ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      }
    }
  }
}
