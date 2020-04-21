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
import { mapGetters, mapActions } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  data () {
    return {
      items: [{ title: 'Salvar dados' }, { title: 'Carregar dados' }],
      on: true,
      sucess: method => alert(`Dados ${method === 'save' ? 'salvos' : 'carregados'} com sucesso!`),
      errorMessage: e => console.log(e),
      url: obj => `${this.$http.baseURL}/${obj}.json`,

      sendToFirebase: function (vm, url, sucess, errorMessage, objTarget, objToSend) {
        vm.$http
          .put(url(objTarget), objToSend)
          .then(sucess('save'))
          .catch(errorMessage)
      },

      getDataFromFirebase: function (vm, url, objSource, f) {
        vm.$http.get(url(objSource)).then(function (ans) {
          try {
            f(vm, ans)
          } catch (error) {
            vm.errorMessage(error)
          }
        })
      },

      requestData: [
        {
          objSource: 'stocks',
          functionLoad: function (vm, ans) {
            vm.updateProducts(ans.data)
            vm.sucess('load')
          }
        },

        {
          objSource: 'sale',
          functionLoad: function (vm, ans) {
            vm.$store.state.User.sale = ans.data
          }
        }
      ]

    }
  },

  computed: {
    ...mapGetters('Stocks', { products: 'getProducts' })
  },

  methods: {
    ...mapActions('Stocks', ['updateProducts']),

    save () {
      console.log('save')
      const products = this.products
      const sale = this.$store.state.User.sale
      const url = this.url
      const sucess = this.sucess
      const errorMessage = this.errorMessage
      const sendToFirebase = this.sendToFirebase
      sendToFirebase(this, url, () => '', errorMessage, 'stocks', products)
      sendToFirebase(this, url, sucess, errorMessage, 'sale', sale)
    },

    load () {
      const url = this.url
      const getDataFromFirebase = this.getDataFromFirebase
      const requestData = this.requestData
      for (var i in requestData) {
        getDataFromFirebase(this, url, requestData[i].objSource, requestData[i].functionLoad)
      }
    }
  }
}
</script>
