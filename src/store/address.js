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
        console.log(data);
        if (data.addresses && data.addresses.length === 0) {
          context.commit('setAddresses', null);  
          return;
        }
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
        const { data } = await ApiService(true).post('user/add-address', payload);
        console.log(data);
        return data;
      } catch (e) {
        const { data } = e.response;
        context.commit('showSnackbar', { color: 'error',message: data.message }, { root: true });
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async deleteAddress(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data : { data }} = await ApiService(true).delete(`user/delete-address?addressId=${payload}`);
        if (data.addresses && data.addresses.length === 0) {
          context.commit('setAddresses', null);  
          return;
        }
        context.commit('setAddresses', data);
        context.commit('showSnackbar', { color: 'success',message: 'Address Deleted Succesfully' }, { root: true });
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
