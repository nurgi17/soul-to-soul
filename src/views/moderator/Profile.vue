<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div v-else class="container">
      <ProfileForm @emitToSP="settings" :user="user" />
    </div>
  </div>
</template>
<script>
import ProfileForm from '@/components/app/ProfileForm.vue'
import messages from '@/utils/messages'
export default {
  name: 'moderator-profile',
  data: () => ({
    loading: true,
    user: {}
  }),
  components: {
    ProfileForm
  },
  async mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
    this.$store
      .dispatch('getUser')
      .then(res => {
        this.loading = false
        this.user = res
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  methods: {
    async settings (value) {
      this.loading = true
      this.user.updated = value
      await this.$store
        .dispatch('updateUser', this.user)
        .then(res => {
          this.user = res
          this.loading = false
          this.$router.push('/moderator-profile?message=userUpdated')
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что то пошло не так')
        })
    }
  }
}
</script>
