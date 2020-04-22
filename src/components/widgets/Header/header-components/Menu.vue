<template>
  <v-menu offset-y open-on-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" depressed class="buttons-label" :style="labelStyle">Salvar e carregar</v-btn>
    </template>

    <v-list>
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
  props: {
    labelStyle: { default: {} }
  },

  data () {
    return {
      items: [{ title: 'Salvar dados' }, { title: 'Carregar dados' }],
      on: true
    }
  },

  methods: {
    save () {
      this.sendToFirebase(this, this.url, () => '', this.errorMessage, 'stocks', this.products)
      this.sendToFirebase(this, this.url, this.sucess, this.errorMessage, 'sale', this.sale)
    },

    load () {
      this.requestData.forEach((reqDataObj) => this.getFromFirebase(this, this.url, reqDataObj.objSource, reqDataObj.functionLoad))
    }
  }
}
</script>
