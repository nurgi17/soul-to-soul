<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import UserLayout from '@/layouts/UserLayout'
import ModeratorLayout from '@/layouts/ModeratorLayout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'user') + '-layout'
    }
  },
  components: {
    UserLayout, ModeratorLayout
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
