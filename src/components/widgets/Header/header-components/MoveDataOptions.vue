<template>
      <v-toolbar-items>
        <v-btn :style="buttonsStyle" depressed @click="endDay">Finalizar dia</v-btn>
        <Menu :labelStyle="buttonsStyle"></Menu>
        <LeftOver :buttonsStyle="buttonsStyle"></LeftOver>
      </v-toolbar-items>
</template>

<script>

import Menu from './Menu'
import LeftOver from './LeftOver'
import getProductsMixin from '@/mixins/getProductsMixin'
import updateAttributeMixin from '@/mixins/updateAttributeMixin'

export default {
  components: { Menu, LeftOver },

  mixins: [getProductsMixin, updateAttributeMixin],

  props: {
    buttonsStyle: {
      type: Object
    }
  },

  data () {
    return {
      request: {
        operation: 'set',
        attribute: 'price',
        product: {}
      },

      randomPrice: function (oldPrice) {
        const random = Math.random()
        const delta = random - 0.5
        let newPrice = (oldPrice * (delta + 1))
        newPrice = newPrice < 50 ? (random * 500 + 50) : newPrice
        newPrice = newPrice.toFixed(2)
        return newPrice
      }

    }
  },

  methods: {
    endDay () {
      const products = this.products
      const request = this.request
      const randomPrice = this.randomPrice
      let product = {}

      for (var i in products) {
        product = products[i]
        request.product.name = product.name
        request.product.price = randomPrice(product.price)
        this.updateAttribute(request)
      }
    }
  }
}
</script>
