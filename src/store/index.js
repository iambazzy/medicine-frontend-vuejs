import Vue from 'vue';
import Vuex from 'vuex';
import pharmacy from './pharmacy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    }
  },
  actions: {
    
  },
  getters: {
    isLoading: state => state.loading,
  },
  modules: {
    pharmacy
  }
});