<template>
  <div>
    <div class="container">
      <UserNavbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import UserNavbar from '@/components/app/UserNavbar'
export default {
  name: 'user-layout',
  components: {
    UserNavbar
  }
}
</script>
