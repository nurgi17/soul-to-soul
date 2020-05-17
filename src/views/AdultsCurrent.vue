<template>
  <div>
    <Loader :loading="loading" v-if="loading"/>
    <div v-else>
      <div class="container-articles">
        <h1>{{ article.title }}</h1>
        <b-img-lazy :src="article.images[0].url" alt="Current article img"></b-img-lazy>
        <div v-html="article.content"></div>
        <div v-if="isBlog">
          <section id="you-are-not-alone-1" class="mb-3">
            <div class="buttons d-flex flex-wrap">
              <button class="btn btn-secondary">Тэг</button>
            </div>
          </section>

          <div class="d-flex flex-row">
            <b-img-lazy
              :src="article.userShortDto.imageUrl"
              alt="Author of this blog"
              width="80px"
              height="80px"
              style="width: 12%; border-radius:50%;"
            ></b-img-lazy>
            <div class="article-author d-flex flex-column ml-4">
              <h3>АВТОР</h3>
              <p>{{ article.userShortDto.firstName + ' ' + article.userShortDto.lastName}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <hr />
        <div class="recomendation">
          <p>
            Больше на
            <span class="font-weight-bold">OLO</span>
          </p>
          <div class="row">
            <div v-for="t in three" :key="t.id" class="recom-articels d-block mx-auto">
              <a href @click.prevent> <!-- @click.prevent="goArticles(t.id)" -->
                <b-img-lazy
                  :src="t.image.url"
                  width="345px"
                  height="200px"
                  alt="Article 4"
                ></b-img-lazy>
              </a>
              <p>{{ t.title }}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/app/Footer.vue'
export default {
  name: 'AdultsCurrent',
  components: { Footer },
  data: () => ({
    article: {},
    three: {},
    loading: true
  }),
  computed: {
    isBlog () {
      return this.$store.getters.isBlog
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchLastNews')
      .then(res => {
        this.three = res
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
    const ids = {
      id: this.$route.params.id,
      update: true
    }
    if (this.isBlog) {
      await this.$store
        .dispatch('fetchBlogById', ids)
        .then(res => {
          this.article = res
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    } else {
      await this.$store
        .dispatch('fetchArticleById', ids.id)
        .then(res => {
          this.article = res
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    }
  }
  // methods: {
  //   goArticles (id) {
  //     this.$store.commit('setBlog', false)
  //     this.$router.push({
  //       path: '/adults-articles-current/' + id
  //     })
  //   }
  // }
}
</script>
