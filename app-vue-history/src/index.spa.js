import './set-public-path'
import singleSpaVue from 'single-spa-vue';
import appOptions from './main';
import './main';
import Vue from 'vue';
import router from './router';

appOptions.store.commit('setSingleSpa',true);

const baseUrl = '/app-vue-history';
appOptions.router = router(baseUrl);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions
});

const { bootstrap, mount: mount1, unmount: unmount1 } = vueLifecycles;

//生命周期函数必须返回一个promise，而async函数总是会返回一个promise
async function mount2(props){
  //注册子系统的时候传递的数据
  console.log(props);
  //文档写的是props.customProps.authToken，实际上发现是props.authToken
  console.log('props.authToken',props.authToken);

  //给body加class,以解决全局样式污染
  document.body.classList.add('app-vue-history')
}

async function unmount2(props){
  //去掉body的class
  document.body.classList.remove('app-vue-history')
}

const mount = [mount1,mount2];
const unmount = [unmount1,unmount2];
export { bootstrap, mount, unmount };