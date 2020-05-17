<template>
    <div class="container-fluid">
        Welcome to Admin Page
    </div>
</template>
<script>
import messages from '@/utils/messages'
export default {
  name: 'admin',
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>
