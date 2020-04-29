<template>
  <div class="container">
    <section id="stories-from-people-like-you">
      <div class="flexible-content d-flex flex-row justify-content-between align-items-center">
        <div class="blog-header d-flex flex-column align-self-end">
          <h1>Рассказы таких людей как ты</h1>
          <p>
            Почитай как другие проходят разные ситуации.
            Ты можешь и свой путь написать
          </p>
          <router-link tag="a" to="/create" class="green-link">Поделиться своей историей</router-link>
        </div>
        <img src="img/Blog/sad_woman.svg" alt="Sadly woman" />
      </div>
    </section>

    <section id="you-are-not-alone-1">
      <Buttons @tagFilter="onTagClick"/>
    </section>

    <!-- <Loader v-if="loading" /> -->
    <section id="adults-articles"> <!--v-else-->
      <div class="row">
        <Articles /> <!--:articles="blogs"-->
      </div>
    </section>
    <Loader/>
    <section id="stories-from-people-like-you">
      <div class="flexible-content d-flex flex-row justify-content-between align-items-center">
        <div class="blog-header d-flex flex-column align-self-end">
          <h4>Есть своя история?</h4>
          <p>Поделись с другими и спасешь жизнь ближнему.</p>
          <router-link tag="button" to="/create" class="btn btn-secondary">Вперед</router-link>
        </div>
        <img src="img/Blog/message.svg" alt="Message icon" />
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Buttons from '@/components/app/Buttons.vue'
import Footer from '@/components/app/Footer.vue'
import Articles from '@/components/app/Articles.vue'
export default {
  name: 'Blog',
  components: {
    Buttons, Footer, Articles
  },
  // data: () => ({
  //   loading: true,
  //   blogs: {}
  // }),
  // async mounted () {
  //   await this.$store.dispatch('fetchBlogs')
  //     .then(res => {
  //       this.blogs = res
  //       this.loading = false
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.loading = false
  //     })
  // }
  methods: {
    async onTagClick (value) {
      console.log(value)
      // this.loading = true
      // const tag = {
      //   tag: value
      // }
      // await this.$store.dispatch('fetchBlogByTag', tag)
      //   .then(res => {
      //     this.blogs = res
      //     this.loading = false
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     this.loading = false
      //   })
    }
  }
}
</script>
