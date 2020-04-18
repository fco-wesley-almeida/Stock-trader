<template>
    <v-layout row wrap>
        <Card nature="s" title="BMW" description="preço: R$ 100,00"/>
        <Card nature="s" title="Apple" description="preço: R$ 100,00"/>
        <Card nature="s" title="Google" description="preço: R$ 100,00"/>
        <Card nature="s" title="Twitter" description="preço: R$ 100,00"/>
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
