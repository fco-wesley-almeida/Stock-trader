export default {
  data () {
    return {

      sucess: method => alert(`Dados ${method === 'save' ? 'salvos' : 'carregados'} com sucesso!`),

      errorMessage: e => console.log(e),

      url: obj => `${this.$http.baseURL}/${obj}.json`,

      sendToFirebase: function (vm, url, sucess, errorMessage, objTarget, objToSend) {
        vm.$http
          .put(url(objTarget), objToSend)
          .then(sucess('save'))
          .catch(errorMessage)
      },

      getFromFirebase: function (vm, url, objSource, f) {
        // console.log('getFromFireBase')
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
  }
}
