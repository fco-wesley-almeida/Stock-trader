import updateProduct from '@/miscellaneous/updateProduct'
// const updateProduct = updateProduct_

export default {
  namespaced: true,
  state: {
    products: [
      { name: 'BMW', price: 100, quantity: 0 },
      { name: 'Google', price: 100, quantity: 0 },
      { name: 'Apple', price: 100, quantity: 0 },
      { name: 'Twitter', price: 100, quantity: 0 }
    ]
  },

  getters: {
    getProducts (state) {
      return state.products
    }
  },

  mutations: {
    setAttribute (state, request) {
      const pName = request.product.name
      const updateProduct = request.updateProduct
      state.products = state.products.map(p => p.name === pName ? updateProduct(p, request) : p)
    },

    setProducts (state, request) {
      state.products = request
    }
  },

  actions: {
    updateAttribute ({ commit }, request) {
      const operation = request.operation

      switch (operation) {
        case 'increase':
          request.operation = 1
          break
        case 'decrease':
          request.operation = -1
          break
        case 'set':
          request.operation = 0
          break
      }

      request.updateProduct = updateProduct
      commit('setAttribute', request)
    },

    updateProducts ({ commit }, products) {
      commit('setProducts', products)
    }
  }
}
