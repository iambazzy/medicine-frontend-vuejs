import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    cartItems: []
  },
  mutations: {
    fillCartItems(state, payload) {
      state.cartItems = payload;
    }
  },
  actions: {
    async addToCart(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).post('cart/add', payload);
        context.commit('fillCartItems', data.data.products);
        context.commit('showSnackbar', { color: 'success', message: data.message }, { root: true });
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async getCart(context) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).get('cart');
        context.commit('fillCartItems', data.data.products);
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async removeFromCart(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).delete(`cart/remove?productId=${payload}`);
        context.commit('fillCartItems', data.data.products);
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {
    getCartItems: state => state.cartItems,
  }
}
