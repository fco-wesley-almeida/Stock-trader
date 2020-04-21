<template>
  <v-menu offset-y open-on-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" depressed class="buttons-label">Salvar e carregar</v-btn>
    </template>

    <v-list>
      <!-- <v-list-item v-for="(item, index) in items" :key="index" @click="console.log(item)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>-->
      <v-list-item>
        <v-btn depressed class="buttons-label" @click="save">Salvar dados</v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn depressed class="buttons-label" @click="load">Carregar dados</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import getProductsMixin from '@/mixins/getProductsMixin'
import updateProductsMixin from '@/mixins/updateProductsMixin'
import dataBaseMixin from '@/mixins/dataBaseMixin'
import getSaleMixin from '@/mixins/getSaleMixin'

export default {

  mixins: [dataBaseMixin, updateProductsMixin, getProductsMixin, getSaleMixin],

  data () {
    return {
      items: [{ title: 'Salvar dados' }, { title: 'Carregar dados' }],
      on: true
    }
  },

  methods: {
    save () {
      const products = this.products
      const sale = this.sale
      const url = this.url
      const sucess = this.sucess
      const errorMessage = this.errorMessage
      const sendToFirebase = this.sendToFirebase
      sendToFirebase(this, url, () => '', errorMessage, 'stocks', products)
      sendToFirebase(this, url, sucess, errorMessage, 'sale', sale)
    },

    load () {
      const url = this.url
      const getFromFirebase = this.getFromFirebase
      const requestData = this.requestData
      for (var i in requestData) {
        getFromFirebase(this, url, requestData[i].objSource, requestData[i].functionLoad)
      }
    }
  }
}
</script>
