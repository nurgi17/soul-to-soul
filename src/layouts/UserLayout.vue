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
import messages from '@/utils/messages'
export default {
  name: 'user-layout',
  components: {
    UserNavbar
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>
