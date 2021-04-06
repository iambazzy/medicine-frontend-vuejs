import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    product: {},
    orderQuantity: 1
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload;
    },
    setOrderQuantity(state, payload) {
      switch(payload.choice) {
        case 'add':
          if (state.orderQuantity < state.product.quantity) {
            state.orderQuantity = state.orderQuantity + 1;
          }
          break;
        case 'subtract':
          if (state.orderQuantity > 1) {
            state.orderQuantity = state.orderQuantity - 1;
          }
          break;
      }
    },
    setDefaultOrderQuantity(state, payload) {
      state.orderQuantity = payload;
    }
  },
  actions: {
    async getProductDetails(context, payload) {
      context.commit('startLoading', null, { root: true });
      const { data: { data } } = await ApiService().get(`/medicine/get-medicine?id=${payload.id}`);
      await context.commit('setProduct', data);
      await context.commit('stopLoading', null, { root: true });
    },
    async getCart(context) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).get('cart');
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {
    getProductDetails: state => state.product,
    getOrderQuantity: state => state.orderQuantity,
  }
}
