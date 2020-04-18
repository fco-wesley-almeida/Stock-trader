<template>
    <v-layout row wrap>
        <Card nature="p" title="BMW" description="preço: R$ 100,00"/>
        <Card nature="p" title="Apple" description="preço: R$ 100,00"/>
        <Card nature="p" title="Google" description="preço: R$ 100,00"/>
        <Card nature="p" title="Twitter" description="preço: R$ 100,00"/>
    </v-layout>
</template>

<script>

import Card from '@/components/widgets/Card'

export default {
  components: { Card }
}
</script>

<style scoped>

</style>
