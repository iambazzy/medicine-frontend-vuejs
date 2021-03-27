import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    medicines: [],
  },
  mutations: {
     setMedicines(state, payload) {
      state.medicines = payload;
    }
  },
  actions: {
    async getMedicines(context) {
      context.commit('startLoading', null, { root: true });
      const { data: { data } } = await ApiService().get('/medicine/get-medicine');
      await context.commit('setMedicines', data);
      await context.commit('stopLoading', null, { root: true });
    }
  },
  getters: {
    getMedicines: state => state.medicines,
  }
}

