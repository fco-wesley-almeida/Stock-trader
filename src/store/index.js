import Vue from 'vue'
import Vuex from 'vuex'
import Portfolio from './modules/Porfolio'
import Stocks from './modules/Stocks'
import User from './modules/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { User, Portfolio, Stocks }
})
