<template>
      <v-toolbar-items>
        <v-btn :style="buttonsStyle" depressed>Finalizar dia</v-btn>
        <Menu></Menu>
        <LeftOver :buttonsStyle="buttonsStyle"></LeftOver>
      </v-toolbar-items>
</template>

<script>

import Menu from './Menu'
import LeftOver from './LeftOver'

export default {
  components: { Menu, LeftOver },
  props: {
    buttonsStyle: {
      type: Object
    }
  }
}
</script>
