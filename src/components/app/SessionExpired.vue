<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      time: 1800000
    }
  },
  created () {
    const timerId = setInterval(async () => {
      this.time -= 1000
      if (!this.$store.state.idleVue.isIdle) clearInterval(timerId)
      if (this.time < 1) {
        clearInterval(timerId)
        await this.$store.dispatch('logout')
        this.$router.push('/login?message=sessionExpired')
      }
    }, 1000)
  }
}
</script>
