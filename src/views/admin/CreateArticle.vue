<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div v-else>
      <Editor :currentBlog="currentBlog" @emitToSP="create" />
    </div>
  </div>
</template>
<script>
import Editor from '@/components/app/Editor.vue'
export default {
  name: 'create-article',
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
    async create (value) {
      this.loading = true
      if (value.title === '' || value.content === '<p></p>') {
        this.loading = false
        this.$error('Для отправки все поля должны быть заполнены!')
      } else {
        value.categoryId = 2
        value.moodId = 0
        value.problemId = 4
        await this.$store
          .dispatch('createArticle', value)
          .then(res => {
            this.loading = false
            this.$router.push('/admin?message=articleCreated')
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
