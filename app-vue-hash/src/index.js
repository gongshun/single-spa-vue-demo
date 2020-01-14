import appOptions from './main';
import './main';
import Vue from 'vue';

appOptions.store.commit('setSingleSpa',false);

new Vue(appOptions).$mount('#app');