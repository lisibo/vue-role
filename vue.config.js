var path = require('path')
var defaultSettings = require('./settings.js')
const name = defaultSettings.title || 'vue app'

module.exports = {
  publicPath:process.env.NODE_ENV !== 'production' ? './' : '/',
  outputDir:'dist',
  assetsDir:'static',
  lintOnSave:false,
  productionSourceMap: false,
  devServer:{
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: true,
    disableHostCheck: true,
    open: true,
    // proxy:{

    // }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV == 'prod'){
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
    Object.assign(config, {
      // 开发生产共同配置
      name:name,
      resolve: {
        // 别名配置
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@v': path.resolve(__dirname, './src/views')
        } 
      }
    })
  }
}