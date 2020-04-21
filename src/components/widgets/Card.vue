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
          <v-text-field label="Quantidade" type="number" v-model.number="quantity"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
          :disabled="disabled"
          :class="buttonStyle" text :dark="!disabled"
          @click="action"
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
      quantity: 0,
      request: {
        operation: this.nature === 's' ? 'increase' : 'decrease',
        attribute: 'quantity',
        product: {
          name: this.product.name
        }
      },
      title: this.product.name,
      plusPrice: this.nature === 's' ? -1 : 1,
      natureStyle: `${this.nature === 'p' ? 'blue' : 'green'} darken-3`
    }
  },

  computed: {
    description () {
      let description = `(Preço: ${this.product.price}`
      description += (this.nature === 'p') ? ` | Qtde: ${this.product.quantity})` : ')'
      return description
    },

    buttonStyle () {
      let style = ''
      if (this.disabled) {
        style = 'grey lighten-2'
      } else {
        style = `${this.nature === 'p' ? 'blue' : 'green'} darken-3`
      }
      return style
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
      // console.log(this.product)
      const totalPrice = this.quantity * this.product.price
      return totalPrice
    },

    disabled () {
      const productsNumberIsPositive = this.quantity > 0
      let overflow

      if (this.nature === 's') {
        const currentSale = this.$store.state.User.sale
        overflow = (currentSale < this.totalPrice)
      } else {
        overflow = (this.quantity > this.product.quantity)
      }
      const disabled = !(productsNumberIsPositive && !overflow)
      return disabled
    }

  },

  watch: {
  },

  methods: {
    ...mapActions('Stocks', ['updateAttribute']),

    action () {
      this.request.product.quantity = this.quantity
      this.updateAttribute(this.request)
      this.$store.state.User.sale += (this.plusPrice * this.totalPrice)
      this.quantity = 0
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
