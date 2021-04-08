import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    mainId: '',
    orders: [],
    showMoreVisible: true
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = [...state.orders, ...payload];
    },
    resetOrders(state) {
      state.orders = [];
    },
    setMainId(state, payload) {
      state.mainId = payload;
    },
    setHideShowMore(state) {
      state.showMoreVisible = false;
    }
  },  
  actions: {
    async placeOrder(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).post('orders/add-order', payload);
        context.commit('showSnackbar', { color: 'success', message: data.message }, { root: true });
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async getOrders(context) {
      try {
        context.commit('startLoading', null, { root: true });
        const nop = parseInt(context.state.orders.length);
        const { data } = await ApiService(true).get(`orders/get-order?nop=${nop}`);
        context.commit('setOrders', data.data.orders);
        context.commit('setMainId', data.data._id);
        if (data.data.orders.length === 0) {
          context.commit('setHideShowMore');
        }
      } catch (e) {
        context.commit('resetOrders');
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async cancelOrder(context, payload) {
      try {
        context.commit('startLoading', null, { root: true });
        const { data } = await ApiService(true).delete(`cart/remove?productId=${payload}`);
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {
    getOrders: state => state.orders,
    getShowStatus: state => state.showMoreVisible,
  }
}
