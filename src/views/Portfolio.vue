<template>
    <v-layout row wrap>
      <Card nature="p" v-for="p in products" :key="p.name" :product="p"/>
    </v-layout>
</template>

<script>

import Card from '@/components/widgets/Card'
import { mapGetters } from 'vuex'

export default {
  components: { Card },
  computed: {
    ...mapGetters('Stocks', { products: 'getProducts' })
  },

  methods: {
    getPrice (product) {

    }
  }
}
</script>

<style scoped>

</style>
