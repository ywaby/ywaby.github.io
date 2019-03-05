//https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // webpack配置
    chainWebpack: config => {
        config.externals({
          'vue': 'Vue',
          'muse-ui': 'MuseUI'
        })
    },
          
    configureWebpack:() =>  {
      },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
     // 是否使用css分离插件 ExtractTextPlugin
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {},
     // 启用 CSS modules for all css / pre-processor files.
     modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // PWA 插件相关配置
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
     open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8000,
     https: false,
     hotOnly: false,
     proxy: null, // 设置代理
     before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
   }