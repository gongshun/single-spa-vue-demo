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

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;
const { bootstrap, mount, unmount } = vueLifecycles;

export { bootstrap, mount, unmount };