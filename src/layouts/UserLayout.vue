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
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (fbError) {
      this.$bvToast.toast(fbError, { // messages[fbError.code].message || 'Что-то пошло не так'
        title: 'Ошибка',
        variant: 'danger',
        autoHideDelay: 3000,
        solid: true,
        appendToast: true
      })
    }
  }
}
</script>
