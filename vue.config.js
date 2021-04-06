const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      }
    },
    plugins: [
      new BundleAnalyzerPlugin(),
    ]
  }
}
