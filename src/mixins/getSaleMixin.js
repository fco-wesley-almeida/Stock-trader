import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('User', { sale: 'getSale' })
  }
}
