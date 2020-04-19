export default {
  namespaced: true,
  state: {
    products: [
      { name: 'BMW', price: 250.5, quantity: 0 },
      { name: 'Google', price: 500, quantity: 2 },
      { name: 'Apple', price: 700, quantity: 0 },
      { name: 'Twitter', price: 900, quantity: 3 }
    ]
  },

  getters: {
    getProducts (state) {
      return state.products
    }
  },

  mutations: {

    setAttribute (state, payLoad) {
      // let products = state.products
      console.log('updateAttribute')
      const operation = payLoad.operation
      const attributeName = operation.replace('update', '').toLowerCase()
      const pName = payLoad.product.name

      console.log(payLoad)
      console.log(attributeName)

      const updateProduct = function (product) {
        const updatedProduct = product
        updatedProduct[attributeName] = payLoad.product[attributeName]
        console.log(updatedProduct)
        return updatedProduct
      }

      state.products = state.products.map(p => p.name === pName ? updateProduct(p) : p)
    }
  },

  actions: {
    setAttribute ({ commit }, payLoad) {
      console.log('updateAttribute')
      commit('updateAttribute', payLoad)
    }
  }
}
