import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    loggedIn: false
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.loggedIn = payload.value;
    }
  },
  actions: {
    async login(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService().post('/user/signin', { email: payload.email, password: payload.password });
        context.commit('setLoggedIn', { value: true })
        await localStorage.setItem('user', JSON.stringify(data));
        context.commit('showSnackbar', { color: 'success', message: data.message }, { root: true });
      } catch (e) {
        const { data } = e.response;
        context.commit('showSnackbar', { color: 'error', message: data.message }, { root: true });
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async verifyToken(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService().post('/user/verify', { token: payload.token });
        if (data.valid) {
          context.commit('setLoggedIn', { value: true });
        }
      } catch (e) {
        await localStorage.removeItem('user');
        context.commit('setLoggedIn', { value: false });
        context.commit('showSnackbar', { color: 'error', message: 'You have been logged out!' }, { root: true });
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {

  }
}
