export default {
  namespaced: true,
  state: {
    sale: 10000
  },

  getters: {
    getSale (state) {
      return state.sale
    }
  },

  mutations: {
    setSale (state, payLoad) {
      state.sale = payLoad
    }
  },

  actions: {
    updateSale ({ commit }, payLoad) {
      commit('setSale', payLoad)
    }
  }
}
