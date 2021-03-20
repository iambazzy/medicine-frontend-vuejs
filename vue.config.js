const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [ new BundleAnalyzerPlugin() ],
    // mode: 'production',
    // optimization: {
    //   nodeEnv : 'production',
    //   minimize: true
    // }
  }
}
