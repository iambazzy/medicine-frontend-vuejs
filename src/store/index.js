import Vue from 'vue';
import Vuex from 'vuex';
import accountModule from './account';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    snackbar: false,
    timeout: 2000,
    message: '',
    color: 'primary'
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    showSnackbar(state, payload) {
      state.snackbar = true;
      state.message = payload.message;
      state.color = payload.color;
    },
    hideSnackbar(state) {
      state.snackbar = false;
    }
  },
  actions: {
    
  },
  getters: {
    isLoading: state => state.loading,
    snackbar: state => state.snackbar,
    timeout: state => state.timeout,
    message: state => state.message,
    color: state => state.color,
  },
  modules: {
    account: accountModule
  }
});