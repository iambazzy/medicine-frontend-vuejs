import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    addresses: {}
  },
  mutations: {
    setAddresses(state, payload) {
      state.addresses = payload;
    }
  },
  actions: {
    async getAddress(context) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data : { data }} = await ApiService(true).get('user/get-address');
        context.commit('setAddresses', data);
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async saveAddress(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data : { data }} = await ApiService(true).post('user/add-address', payload);
        return data;
      } catch (e) {
        const { data } = e.response;
        context.commit('showSnackbar', { color: 'error',message: data.message }, { root: true });
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {
    getAddresses: state => state.addresses
  }
}
