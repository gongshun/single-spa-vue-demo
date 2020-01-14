import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSingleSpa: false,
  },
  mutations: {
    setSingleSpa(state,val){
      state.isSingleSpa = val;
    }
  },
  actions: {},
  modules: {}
});
