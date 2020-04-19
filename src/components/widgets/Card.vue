<template>
  <v-layout class="card" v-if="product.quantity || nature === 's'">
    <!-- <v-flex class="pr-3 pb-3" xs12 md6 lg4> -->
    <v-flex >

      <v-card min-width="375px" max-width="375px" :class="natureStyle">
        <div class="box" :style="natureStyle">
          <v-card-title class="headline">
            <strong> {{ title }} <small>{{ description }}</small></strong>
          </v-card-title>
        </div>
      </v-card>

      <v-card min-width="375px" max-width="375px">
        <v-container fill-height width="375px">
          <v-text-field label="Quantidade" type="number" v-model="quantity"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
          :class="natureStyle" flat dark
          @click="action"
          :disabled="false"
          >{{ labelButton }}</v-btn>
        </v-container>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  props: {
    nature: {
      required: true,
      type: String
    },

    product: {
      required: true,
      type: Object
    },

    price: {
      type: Number,
      default: 0
    }

  },

  data () {
    return {
      quantity: 0
    }
  },

  computed: {
    natureStyle () {
      const style = `${this.nature === 'p' ? 'blue' : 'green'} darken-3`
      return style
    },

    title () {
      const title = this.product.name
      return title
    },

    description () {
      let description
      description = `(Preço: ${this.product.price}`
      description += this.nature === 'p' ? ` | Qtde: ${this.product.quantity})` : ')'
      return description
    },

    labelButton () {
      const currentSale = this.$store.state.User.sale
      let label
      if (this.nature === 's') {
        label = this.totalPrice > currentSale ? 'Insuficiente' : 'Comprar'
      } else {
        label = this.quantity > this.product.quantity ? 'Insuficiente' : 'Vender'
      }

      return label
    },

    totalPrice () {
      const totalPrice = this.quantity * this.product.price
      return totalPrice
    }

  },

  watch () {
  },

  methods: {
    ...mapActions('Stocks', ['updateAttribute']),
    // ...mapActions('Stocks', ['updateAttribute']),

    buy () {
      console.log('buy')
      const requestUpdateQuantity = {
        operation: 'updateQuantity',
        product: {
          name: this.product.name,
          quantity: this.quantity
        }
      }

      // console.log(requestUpdateQuantity)
      this.updateAttribute(requestUpdateQuantity)
      this.$store.state.User.sale -= this.totalPrice
      this.quantity = 0
    },

    sell () {
      console.log('sell')
    },

    action () {
      console.log('action')
      if (this.nature === 's') {
        this.buy()
      } else {
        this.sell()
      }
    }
  }
}
</script>

<style scoped>
.box {
  height: 60px;
  width: 375px;
  /* background-color: rgb(39, 39, 238); */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: x-large;
  color: white;
}

.card {
  margin-top: 50px;
  margin-left: 50px;
  }
</style>
