<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand href to="/admin">Admin</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="n in nav" :key="n" href>{{ n }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href to="/admin-create-article">Create Article</b-nav-item>
            <b-navbar-brand href="#">
              <img src="https://placekitten.com/g/30/30" alt="Kitten" />
            </b-navbar-brand>
            <b-nav-item href>Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>
import messages from '@/utils/messages'
export default {
  name: 'admin-layout',
  data () {
    return {
      nav: ['User', 'Article', 'Blog', 'Tag', 'ImageArticle', 'ImageBlog']
    }
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>
