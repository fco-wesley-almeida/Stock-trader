<template>
  <v-toolbar-items>
    <v-btn text to="/" :style="buttonsStyle" depressed>Início</v-btn>
    <v-btn text to="/portfolio" :style="buttonsStyle" depressed>Portfolio</v-btn>
    <v-btn text to="/stocks" :style="buttonsStyle" depressed>Ações</v-btn>
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
