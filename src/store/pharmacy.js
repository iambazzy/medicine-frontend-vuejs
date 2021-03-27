import ApiService from '../plugins/axios';

export default {
  namespaced: true,
  state: {
    medicines: [],
    showSeeMore: true,
    searchedMedicine: ''
  },
  mutations: {
    setMedicines(state, payload) {
      state.medicines = payload;
    },
    setSeeMore(state, payload) {
      state.showSeeMore = payload;
    },
    setSearched(state, payload) {
      state.searchedMedicine = payload;
    }
  },
  actions: {
    async getMedicines(context) {
      try {
        const nop = context.state.medicines.length;
        let param = `nop=${nop}`;
        context.commit('startLoading', null, { root: true });
        const { data: { data } } = await ApiService().get(`/medicine/get-medicine?${param}`);
        await context.commit('setMedicines', [...context.state.medicines, ...data ]);
        if (data.length === 0) {
          context.commit('setSeeMore', false);
        } else {
          context.commit('setSeeMore', true);
        }
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    },
    async searchMedicines(context, payload) {
      try {
        let param = `q=${payload}`;
        context.commit('startLoading', null, { root: true });
        const { data: { data } } = await ApiService().get(`/medicine/get-medicine?${param}`);
        await context.commit('setMedicines', data);
        if (data.length < 20) {
          context.commit('setSeeMore', false);
        } else {
          context.commit('setSeeMore', true);
        }
      } catch (e) {
        console.log(e);
      } finally {
        await context.commit('stopLoading', null, { root: true });
      }
    }
  },
  getters: {
    getMedicines: state => state.medicines,
    seeMore: state => state.showSeeMore,
    searchedMedicine: state => state.searchedMedicine,
  }
}

