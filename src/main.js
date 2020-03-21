import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.component('Paginate', Paginate)

require('@/assets/css/style.css')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
