import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Loader from '@/components/app/Loader'
import Paginate from 'vuejs-paginate'
import messagePlugin from '@/utils/messages.plugin'
import IdleVue from 'idle-vue'
import dateFilter from '@/filters/date.filter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

const eventsHub = new Vue()
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000,
  startAtIdle: false
})
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  // eslint-disable-next-line dot-notation
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer_' + token
}

firebase.initializeApp({
  apiKey: 'AIzaSyD6d9rT6nsRQG3OPZOtBOcXhA38OY_kSv4',
  authDomain: 'soul-to-soul.firebaseapp.com',
  databaseURL: 'https://soul-to-soul.firebaseio.com',
  projectId: 'soul-to-soul',
  storageBucket: 'soul-to-soul.appspot.com',
  messagingSenderId: '931423436930',
  appId: '1:931423436930:web:3d3c72704dc7c4b957749b',
  measurementId: 'G-D8NXS2V0QQ'
})

require('@/assets/css/style.css')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
