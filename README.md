# single-spa-vue-demo

`home-nav`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

## 开发调试

先分别进入三个项目，安装模块依赖`npm install`,

然后在`app-vue-hash`和`app-vue-history`目录执行`npm run spa-serve`,

最后在`home-nav`主项目目录执行`npm run serve`即可进行single-spa模式调试

`app-vue-hash`和`app-vue-history`两个子项目，仍可以执行`npm run serve`进行独立开发调试

## 打包部署

各个项目独立打包部署，打包命令不变，更新主项目的配置文件`importmap.json`即可

查看项目的详细介绍：[从0实现一个前端微服务（上）](https://juejin.im/post/5e1c0fc7f265da3e413f4fe4)