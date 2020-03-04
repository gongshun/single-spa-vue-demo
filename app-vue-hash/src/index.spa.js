import './set-public-path'
import singleSpaVue from 'single-spa-vue';
import appOptions from './main';
import './main';
import Vue from 'vue';

appOptions.store.commit('setSingleSpa',true);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions
});


const { bootstrap, mount: mount1, unmount: unmount1 } = vueLifecycles;

const headEle = document.querySelector('head');
let linkEle = null ;
// 因为新插入的icon会覆盖旧的，所以旧的不用删除，如果需要删除，可以在unmount时再插入进来
async function mount2(props){
  linkEle = document.createElement("link");
  linkEle.setAttribute('rel','icon');
  linkEle.setAttribute('href','https://gold-cdn.xitu.io/favicons/favicon.ico');
  headEle.appendChild(linkEle);
}
async function unmount2(props){
  headEle.removeChild(linkEle);
  linkEle = null;
}

const mount = [mount1,mount2];
const unmount = [unmount1,unmount2];
export { bootstrap, mount, unmount };