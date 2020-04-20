export default {
  namespaced: true,
  state: {
    products: [
      { name: 'BMW', price: 250.5, quantity: 0 },
      { name: 'Google', price: 500, quantity: 0 },
      { name: 'Apple', price: 700, quantity: 0 },
      { name: 'Twitter', price: 900, quantity: 0 }
    ]
  },

  getters: {
    getProducts (state) {
      return state.products
    }
  },

  mutations: {
    setAttribute (state, request) {
      console.log('setAttribute')
      console.log(request)
      const pName = request.product.name
      const updateProduct = request.updateProduct
      state.products = state.products.map(p => p.name === pName ? updateProduct(p, request) : p)
    }
  },

  actions: {
    updateAttribute ({ commit }, request) {
      console.log('updateAttribute')
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

      request.updateProduct = function (product, request) {
        const reqOperation = request.operation
        const attribute = request.attribute
        const reqNewAttributeValue = request.product[attribute]

        if (reqOperation) {
          product[attribute] += (reqOperation * reqNewAttributeValue)
        } else {
          product[attribute] = reqNewAttributeValue
        }
        return product
      }

      commit('setAttribute', request)
    }
  }
}
