<template>
  <div id="header">
    <v-app-bar app color="gray" class="headline text-uppercase mb-4">

      <BarTitle></BarTitle>
      <NavigationOptions :buttonsStyle="buttonsStyle"></NavigationOptions>
      <v-spacer></v-spacer>
      <MoveDataOptions :buttonsStyle="buttonsStyle"></MoveDataOptions>

    </v-app-bar>
  </div>
</template>

<script>

import BarTitle from './header-components/BarTitle'
import NavigationOptions from './header-components/NavigationOptions'
import MoveDataOptions from './header-components/MoveDataOptions'

export default {
  props: {
    source: String
  },

  components: { BarTitle, NavigationOptions, MoveDataOptions },

  data () {
    return {
      drawer: null,
      buttonsStyle: {
        'font-weight': 'bold',
        'font-family': '"Merriweather", serif',
        'font-size': 'small'
      }
    }
  }
}
</script>
