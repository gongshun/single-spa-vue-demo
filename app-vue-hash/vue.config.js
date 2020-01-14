const CopyPlugin = require('copy-webpack-plugin');

const env = process.env.VUE_APP__ENV; // 是否是single-spa
const modeEnv = process.env.NODE_ENV; // 开发环境还是生产环境

const config = {
  productionSourceMap: false,//去掉sourceMap
  filenameHashing: false,//去掉文件名的hash值
};

const enteyFile = env === 'singleSpa' ? './src/index.spa.js' : './src/index.js';
//正常打包的app.js在js目录下，而single-spa模式则需要在根目录下。
//打包时会从dist-spa/js目录将app.js拷贝到正常打包的根目录下，所以不用管，只需要判断single-spa的开发模式即可
const filename = modeEnv === 'development' ? '[name].js' : 'js/[name].js';

chainWebpack = config => {
  config.entry('app')
    .add(enteyFile)
    .end()
    .output
      .filename(filename);
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
          from: 'dist-spa/js/app.js',
          to: '' 
        }])
      ],
    } : {},
  })
}

module.exports = config;