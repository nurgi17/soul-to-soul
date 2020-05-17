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
              <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Users%2Fadmin.svg?alt=media&token=2ca54144-13d9-445d-a380-ae54ae52519d" width="30px" height="30px" alt="Kitten" ></b-img-lazy>
            </b-navbar-brand>
            <b-nav-item href @click.prevent="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'admin-layout',
  data () {
    return {
      nav: ['User', 'Article', 'Blog', 'Tag', 'ImageArticle', 'ImageBlog']
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}
</script>
