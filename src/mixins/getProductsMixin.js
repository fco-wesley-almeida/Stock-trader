import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('Stocks', { products: 'getProducts' })
  }
}
