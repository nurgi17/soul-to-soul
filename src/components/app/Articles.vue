<template>
<div class="row">
    <div
    v-for="article in articles"
    :key="article.id"
    class="col-12 col-sm-6 mb-4">
      <div class="adults-articles-main d-flex flex-wrap">
        <a href @click.prevent="goArticles(article.id, article.isBlog)">
          <b-img-lazy :src="article.image.url" alt="Article image" width="275px" height="208px"></b-img-lazy>
        </a>
        <div class="adults-article-body d-flex flex-column ml-3">
          <h4>{{ article.title }}</h4>
          <p v-html="article.shortContent"></p>
          <a href @click.prevent="goArticles(article.id, article.isBlog)" class="green-link">Читать дальше</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles'],
  methods: {
    goArticles (id, isBlog) {
      if (isBlog) {
        this.$store.commit('setBlog', isBlog)
      }
      this.$router.push({
        path: '/adults-articles-current/' + id
      })
    }
  }
}
</script>
