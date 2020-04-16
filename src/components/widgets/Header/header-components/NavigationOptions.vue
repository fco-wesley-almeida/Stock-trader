<template>
  <v-toolbar-items>
    <v-btn flat to="/" :style="buttonsStyle" depressed>Início</v-btn>
    <v-btn flat to="/stocks" :style="buttonsStyle" depressed>Ações</v-btn>
    <v-btn flat to="/portfolio" :style="buttonsStyle" depressed>Portfolio</v-btn>
  </v-toolbar-items>
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
