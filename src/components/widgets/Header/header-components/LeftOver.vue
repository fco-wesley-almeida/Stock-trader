<template>
    <v-layout align-center>
      <span class="text-uppercase grey--text text--darken-2" :style="buttonsStyle">Saldo: {{ sale }}</span>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    buttonsStyle: {
      type: Object
    }
  },

  computed: {
    ...mapGetters('User', { sale: 'getSale' })
  }
}
</script>
