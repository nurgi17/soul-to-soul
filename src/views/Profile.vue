<template>
<div class="container">
    <Loader :loading="loading" v-if="loading"/>
    <ProfileForm v-else @emitToSP="settings" :user="user"/>
</div>
</template>
<script>
import ProfileForm from '@/components/app/ProfileForm.vue'
export default {
  data: () => ({
    loading: true,
    user: {}
  }),
  components: {
    ProfileForm
  },
  async mounted () {
    this.$store.dispatch('getUser')
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
      await this.$store.dispatch('updateUser', this.user)
        .then(res => {
          this.loading = false
          this.$router.push('/profile?message=userUpdated')
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что то пошло не так')
        })
    }
  }
}
</script>
