<template>
      <v-toolbar-items>
        <v-btn :style="buttonsStyle" depressed @click="endDay">Finalizar dia</v-btn>
        <Menu></Menu>
        <LeftOver :buttonsStyle="buttonsStyle"></LeftOver>
      </v-toolbar-items>
</template>

<script>

import Menu from './Menu'
import LeftOver from './LeftOver'
import { mapActions } from 'vuex'

export default {
  components: { Menu, LeftOver },
  props: {
    buttonsStyle: {
      type: Object
    }
  },

  data () {
    return {}
  },

  methods: {
    ...mapActions('Stocks', ['updateAttribute']),
    endDay () {
      const products = this.$store.getters['Stocks/getProducts']

      const randomPrice = function (oldPrice) {
        const random = Math.random()
        const delta = random - 0.5
        let newPrice = (oldPrice * (delta + 1))
        newPrice = newPrice < 50 ? (random * 500 + 50) : newPrice
        newPrice = newPrice.toFixed(2)
        return newPrice
      }

      const request = {
        operation: 'set',
        attribute: 'price',
        product: { operation: 'set', attribute: 'price' }
      }

      let product = { }

      for (var i in products) {
        product = products[i]
        request.product.name = product.name
        request.product.price = randomPrice(product.price)
        console.log(request)
        this.updateAttribute(request)
      }
    }
  }
}
</script>
