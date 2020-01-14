const CopyPlugin = require('copy-webpack-plugin');

const env = process.env.VUE_APP__ENV; // 是否是single-spa
const modeEnv = process.env.NODE_ENV; // 开发环境还是生产环境

const config = {
  productionSourceMap: false,//去掉sourceMap
  filenameHashing: false,//去掉文件名的hash值
};

const enteyFile = env === 'singleSpa' ? './src/index.spa.js' : './src/index.js';

chainWebpack = config => {
  config.entry('app')
    .add(enteyFile)
    .end()
    .output
      .filename('[name].js'); //将app.js生成到index.html同目录下，而不是/js目录
  if(env === 'singleSpa'){
    //vue,vue-router不打包进app.js，使用外链
    config.externals(['vue', 'vue-router'])
  }
}

if(env === 'singleSpa'){
  Object.assign(config, {
    outputDir: 'dist-spa',
    devServer: {
      hot: false,//关闭热更新
      port: 7778
    },
    chainWebpack,
  })
}else{
  Object.assign(config, {
    chainWebpack,
    configureWebpack: modeEnv === 'production' ? {
      plugins: [
        //将single-spa模式下打包生成的app.js拷贝到正常模式打包的主目录
        new CopyPlugin([{ 
          from: 'dist-spa/app.js',
          to: '' 
        }])
      ],
    } : {},
  })
}

module.exports = config;