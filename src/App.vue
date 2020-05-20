<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <SessionExpired v-if="isIdle" />
    </div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import UserLayout from '@/layouts/UserLayout'
import ModeratorLayout from '@/layouts/ModeratorLayout'
import NoneLayout from '@/layouts/NoneLayout'
import AdminLayout from '@/layouts/AdminLayout'
import SessionExpired from '@/components/app/SessionExpired'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'none') + '-layout'
    },
    isIdle () {
      return this.$store.state.idleVue.isIdle
    },
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  components: {
    UserLayout,
    ModeratorLayout,
    NoneLayout,
    AdminLayout,
    SessionExpired
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  }
}
</script>
<style src="@/assets/css/style.css">
</style>
