// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/starwars',
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/starwars/'
    : '/'
}