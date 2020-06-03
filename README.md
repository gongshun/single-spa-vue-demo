# single-spa-vue-demo

`home-nav`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

## 开发调试

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。注意这时候子项目是以`single-spa`的方式运行的，不可独立访问查看效果。

如果子项目需要独立运行查看效果，可以分别进入到子项目目录运行`npm run serve`，也可以在根目录执行`npm run start-usual-all`，可以同时启动三个项目，分别独立查看效果。

## 打包部署

在根目录运行`npm run build-all`即可为所有项目打包，打包的文件分别在三个项目的`dist`文件夹，分别部署这三个`dist`即可。也可以进入子项目目录执`npm run build`为某个子项目单独打包。

查看项目的详细介绍：[从0实现一个前端微服务（上）](https://juejin.im/post/5e1c0fc7f265da3e413f4fe4)