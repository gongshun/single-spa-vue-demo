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

const { bootstrap, mount, unmount } = vueLifecycles;

export { bootstrap, mount, unmount };