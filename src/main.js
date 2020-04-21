import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuelidate)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  // eslint-disable-next-line dot-notation
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer_' + token
}

require('@/assets/css/style.css')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
