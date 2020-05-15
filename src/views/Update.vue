<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div v-else>
      <div
        class="container sorry"
      >Извините но ваше устройство не подходит для создания новых блогов, вы можете повернуть телефон по горизонтали.</div>
      <Editor :currentBlog="currentBlog" @emitToSP="saveAndPublish" />
    </div>
  </div>
</template>
<script>
import Editor from '@/components/app/Editor.vue'
export default {
  components: {
    Editor
  },
  data: () => ({
    loading: true,
    currentBlog: {}
  }),
  async mounted () {
    const id = this.$route.params.id
    await this.$store
      .dispatch('fetchBlogById', id)
      .then(res => {
        this.loading = false
        this.currentBlog = res
        if (this.currentBlog.images.length === 0) {
          this.currentBlog.images.push({
            url: ''
          })
        }
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  methods: {
    async saveAndPublish (value) {
      this.loading = true
      if (value.title === '' || value.content === '<p></p>') {
        this.loading = false
        this.$error('Для отправки все поля должны быть заполнены!')
      } else {
        this.currentBlog.updated = value
        console.log(this.currentBlog)
        await this.$store.dispatch('updateBlog', this.currentBlog)
          .then(res => {
            this.loading = false
            this.$router.push('/my-blog?message=blogUpdated')
          })
          .catch(err => {
            this.loading = false
            console.log(err)
            this.$error(err || 'Что-то пошло не так')
          })
      }
    }
  }
}
</script>
