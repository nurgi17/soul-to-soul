<template>
  <div id="app">
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
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'none') + '-layout'
    }
  },
  components: {
    UserLayout,
    ModeratorLayout,
    NoneLayout,
    AdminLayout
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
