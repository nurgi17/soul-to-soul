<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div
      class="container sorry"
    >Извините но ваше устройство не подходит для создания новых блогов, вы можете повернуть телефон по горизонтали.</div>
    <Editor :currentBlog="currentBlog" @emitToSP="saveAndPublish" />
  </div>
</template>

<script>
import Editor from '@/components/app/Editor.vue'
export default {
  components: {
    Editor
  },
  data () {
    return {
      loading: false,
      currentBlog: {
        title: '',
        content: '',
        images: [
          {
            url: ''
          }
        ]
      }
    }
  },
  methods: {
    async saveAndPublish (value) {
      this.loading = true
      if (value.title === '' || value.content === '<p></p>') {
        this.loading = false
        this.$error('Для отправки все поля должны быть заполнены!')
      } else {
        await this.$store
          .dispatch('createBlog', value)
          .then(res => {
            this.loading = false
            this.$router.push('/my-blog?message=blogCreated')
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
