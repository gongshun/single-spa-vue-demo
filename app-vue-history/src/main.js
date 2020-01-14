import store from "./store";
import Vue from 'vue';
import App from './App.vue';

const appOptions = {
  render: (h) => h(App),
  store,
}

Vue.config.productionTip = false;

export default appOptions;