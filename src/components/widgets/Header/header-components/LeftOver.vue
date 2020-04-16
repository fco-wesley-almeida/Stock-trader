<template>
    <v-layout align-center>
      <span class="text-uppercase grey--text text--darken-2" :style="buttonsStyle">Saldo: 100,00</span>
    </v-layout>
</template>

<script>
export default {
  props: {
    buttonsStyle: {
      type: Object
    }
  }
}
</script>
