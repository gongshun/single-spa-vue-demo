import appOptions from './main';
import './main';
import Vue from 'vue';
import router from './router';

appOptions.store.commit('setSingleSpa',false);

const baseUrl = '/';
appOptions.router = router(baseUrl);

new Vue(appOptions).$mount('#app');