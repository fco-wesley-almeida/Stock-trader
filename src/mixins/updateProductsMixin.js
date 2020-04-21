import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('Stocks', ['updateProducts'])
  }
}
