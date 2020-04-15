<template>
  <div id="header">
    <v-app-bar app color="gray" class="headline text-uppercase mb-4">
      <v-toolbar-title class="font-weight-light">
        <span style="font-weight: bold">Stock</span>
        <span>Treader</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat to="/" class="buttons-label" depressed>Início</v-btn>
        <v-btn flat to="/stocks" class="buttons-label" depressed>Ações</v-btn>
        <v-btn flat to="/portfolio" class="buttons-label" depressed>Portfolio</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn class="buttons-label" depressed>Finalizar dia</v-btn>
        <!-- <v-btn class="buttons-label" depressed>Salvar e carregar</v-btn> -->
        <v-menu offset-y>
            <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        </v-menu>

        <v-layout align-center>
          <span class="text-uppercase grey--text text--darken-2">Saldo: 100,00</span>
        </v-layout>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
.buttons-label {
  font-weight: bold;
  font-family: "Merriweather", serif;
  font-size: small;
}
</style>
