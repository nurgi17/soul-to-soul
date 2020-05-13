export default {
  install (Vue, options) {
    Vue.prototype.$error = function (error) {
      this.$root.$bvToast.toast(error, {
        title: 'Ошибка',
        variant: 'danger',
        autoHideDelay: 3000,
        solid: true
      })
    }
    Vue.prototype.$message = function (mes) {
      this.$bvToast.toast(mes.message, {
        title: mes.title,
        variant: mes.type,
        autoHideDelay: 3000,
        solid: true,
        appendToast: true
      })
    }
  }
}
