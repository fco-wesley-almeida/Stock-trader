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
      // console.log('setAttribute')
      // console.log(request)
      const pName = request.product.name
      const updateProduct = request.updateProduct
      // console.log(pName)
      // console.log(updateProduct)
      state.products = state.products.map(p => p.name === pName ? updateProduct(p, request) : p)
    },

    setProducts (state, request) {
      state.products = request
    }
  },

  actions: {
    updateAttribute ({ commit }, request) {
      // console.log('updateAttribute')
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

        // console.log(reqOperation)
        // console.log(attribute)
        // console.log(reqNewAttributeValue)

        if (reqOperation) {
          product[attribute] += (reqOperation * reqNewAttributeValue)
        } else {
          product[attribute] = reqNewAttributeValue
        }
        return product
      }

      commit('setAttribute', request)
    },

    updateProducts ({ commit }, products) {
      commit('setProducts', products)
    }
  }
}
