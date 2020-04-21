import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('real', function (money) {
  money = `R$ ${(parseFloat(money).toFixed(2)).toString().replace('.', ',')}`
  return money
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
