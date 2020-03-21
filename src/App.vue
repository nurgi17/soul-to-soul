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
      return (this.$route.meta.layout || 'moderator') + '-layout'
    }
  },
  components: {
    UserLayout, ModeratorLayout
  }
}
</script>
<style src="@/assets/css/style.css">
</style>
