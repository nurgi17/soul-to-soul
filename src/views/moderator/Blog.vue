<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div class="row ml-1">
      <div v-for="b in blogs" :key="b.id" class="master-piece col-12 col-sm-6 col-lg-4">
        <h3>{{ b.title }}</h3>
        <p v-html="b.shortContent"></p>
        <div class="decision">
          <router-link
            class="blue"
            tag="a"
            :to="{ path: '/moderator-check-current/' + b.id }"
          >Проверить</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
      blogs: {}
    }
  },
  async mounted () {
    await this.$store
      .dispatch('fetchBlogs', 2)
      .then(res => {
        this.loading = false
        this.blogs = Object.values(res).filter(function (r) {
          return r.status === 'CREATED'
        })
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  }
}
</script>
