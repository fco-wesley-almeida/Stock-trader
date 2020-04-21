<template>
    <v-layout row wrap>
      <Card nature="p" v-for="p in products" :key="p.name" :product="p"/>
    </v-layout>
</template>

<script>

import Card from '@/components/widgets/Card'
import getProductsMixin from '@/mixins/getProductsMixin'

export default {
  components: { Card },
  mixins: [getProductsMixin]
}
</script>

<style scoped>

</style>
