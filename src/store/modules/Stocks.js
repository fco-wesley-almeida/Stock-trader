export default {
  namespaced: true,
  state: {
    products: [
      { name: 'BMW', price: 25.5 },
      { name: 'Google', price: 50 },
      { name: 'Apple', price: 70 },
      { name: 'Twitter', price: 90 },
    ]
  },

  getters: {
    getProducts(state) {
      return state.products
    }
  },

  mutations: {
    setPrice(state, payLoad) {
      const pName = payload.name
      const pNewPrice = payload.price
      const products = this.state.products
      products = products.map(product =>
        product.name == pName ?
        { name: pName, price: pNewPrice } :
        product
        )
    }
  },

  actions: {

  },



}
