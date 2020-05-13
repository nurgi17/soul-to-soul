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
// import messages from '@/utils/messages'
export default {
  name: 'user-layout',
  components: {
    UserNavbar
  }
  // computed: {
  //   error () {
  //     return this.$store.getters.err
  //   }
  // },
  // watch: {
  //   error (fbError) {
  //     this.$error(fbError)
  //     // messages[fbError.code].message || 'Что-то пошло не так'
  //   }
  // }
}
</script>
