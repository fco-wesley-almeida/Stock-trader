<template>
  <div>
    <h1 class="font-weight-light title mb-6">Negocie e consulte suas ações</h1>
    <Sheet color="blue" message="Você pode Salvar & Carregar os Dados"></Sheet>
    <Sheet color="green" message="Clique em 'Finalizar Dia' para iniciar um novo dia!"></Sheet>
     <p class="font-weight-light mb-6 money"><strong class="left-over">Seu saldo:</strong> {{ sale }} </p>
  </div>
</template>

<script >

import Sheet from '@/components/widgets/Home/Sheet.vue'
// import { mapGetters } from 'vuex'

export default {
  components: { Sheet },

  computed: {
    sale () {
      return this.$store.state.User.sale
    }
  }
}
</script>

<style scoped>
  .title{
    font-weight:lighter;
    font-size: 56px !important;
    line-height: 1.35 !important;
    letter-spacing: -0.02em !important;
    font-family: "Merriweather", serif;
  }
  .left-over{
    font-weight:bold;
    font-size: 40px !important;
    line-height: 1.35 !important;
    letter-spacing: -0.02em !important;
    font-family: "Merriweather", serif;
  }
  .money{
    font-weight:lighter;
    font-size: 40px !important;
    line-height: 1.35 !important;
    letter-spacing: -0.02em !important;
    font-family: "Merriweather", serif;
  }
</style>
