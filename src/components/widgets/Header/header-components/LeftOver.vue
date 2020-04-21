<template>
    <v-layout align-center>
      <span class="text-uppercase grey--text text--darken-2" :style="buttonsStyle">Saldo: {{ sale | real }}</span>
    </v-layout>
</template>

<script>
import getSaleMixin from '@/mixins/getSaleMixin'

export default {
  mixins: [getSaleMixin],
  props: {
    buttonsStyle: {
      type: Object
    }
  }
}
</script>
