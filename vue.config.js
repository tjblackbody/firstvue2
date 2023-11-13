const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // lintOnSave: false,
  // devServer: {
  //   host: 'localhost',
  //   port: 7879,
  //   https: false,
  //   open: true,
  //   proxy: {
  //     '/cms': {
  //       target: 'http://tech.wolfcode.cn:8881',
  //       changeOrigin: true
  //     }

  //   }
  // }
})
