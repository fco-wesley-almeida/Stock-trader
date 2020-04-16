<template>
  <v-menu offset-y open-on-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" depressed class="buttons-label">Salvar e carregar</v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" @click="console.log(item)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data () {
    return { items: [{ title: 'Salvar dados' }, { title: 'Carregar dados' }] }
  }
}
</script>
