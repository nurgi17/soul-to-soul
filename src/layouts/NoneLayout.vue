<template>
  <div class="container">
    <UserNavbar />
    <h1>404 Not found {{ this.$route.path }}</h1>
    <router-view />
  </div>
</template>
<script>
import UserNavbar from '@/components/app/UserNavbar'
export default {
  name: 'none-layout',
  components: {
    UserNavbar
  }
}
</script>
