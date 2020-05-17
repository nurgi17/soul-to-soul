<template>
  <div class="body row">

    <div class="ver-article d-block mx-auto">
      <div class="article1 d-flex flex-row">
        <b-img-lazy :src="news[2].image.url" alt="Article 1" height="388px" class="mr-2 mb-2"></b-img-lazy>
        <div class="ver-body">
          <h4>
            {{ news[2].title }}
          </h4>
          <p v-html="news[2].shortContent">
          </p>
          <a href @click.prevent="goArticles(news[2].id)" class="green-link">Читать дальше</a>
        </div>
      </div>
    </div>

    <div class="hr-articles d-block mx-auto">

      <div class="article1 d-flex flex-row">
        <b-img-lazy :src="news[1].image.url" alt="Article 2" height="210px"  class="mr-2 mb-2"></b-img-lazy>
        <div class="hor-body">
          <h6>
            {{ news[1].title }}
          </h6>
          <p v-html="news[1].shortContent"></p>
          <a href @click.prevent="goArticles(news[1].id)" class="green-link">Читать дальше</a>
        </div>
      </div>

      <div class="article1 d-flex flex-row">
        <b-img-lazy :src="news[0].image.url" alt="Article 3" height="210px"  class="mr-2 mb-2"></b-img-lazy>
        <div class="hor-body">
          <h6>
            {{ news[0].title }}
          </h6>
          <p v-html="news[0].shortContent"></p>
          <a href @click.prevent="goArticles(news[0].id)" class="green-link">Читать дальше</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'last-three-articles',
  props: ['news'],
  methods: {
    goArticles (id) {
      this.$store.commit('setBlog', false)
      this.$router.push({
        path: '/adults-articles-current/' + id
      })
    }
  }
}
</script>
