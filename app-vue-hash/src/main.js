import store from "./store";
import Vue from 'vue';
import App from './App.vue';
import router from './router';

const appOptions = {
  render: (h) => h(App),
  router,
  store,
}

Vue.config.productionTip = false;

export default appOptions;