<template>
    <v-layout row wrap>

        <!-- <Card nature="s" v-for="p in products" :key="p.name" :title="p.name" :description="`Preço: ${p.price}`"/> -->
        <Card nature="s" v-for="p in products" :key="p.name" :product="p"/>

        <!-- <Card nature="s" title="BMW" description="preço: R$ 100,00"/>
        <Card nature="s" title="Apple" description="preço: R$ 100,00"/>
        <Card nature="s" title="Google" description="preço: R$ 100,00"/>
        <Card nature="s" title="Twitter" description="preço: R$ 100,00"/> -->
    </v-layout>
</template>

<script>

import Card from '@/components/widgets/Card'
import { mapGetters } from 'vuex'
export default {
  components: { Card },
  computed: {
    ...mapGetters('Stocks', { products: 'getProducts' })
  }
}
</script>

<style scoped>

</style>
