<template>
<div class="row">
    <div
    v-for="article in articles"
    :key="article.id"
    class="col-12 col-sm-6 mb-4">
      <div class="adults-articles-main d-flex flex-wrap">
        <router-link tag="a" to="/adults-articles-current">
          <img :src="article.image.url" alt="Article image" width="275px" height="208px"/>
        </router-link>
        <div class="adults-article-body d-flex flex-column ml-3">
          <h4>{{ article.title }}</h4>
          <p v-html="article.shortContent"></p>
          <router-link tag="a" :to="{ path: '/adults-articles-current/' + article.id}" class="green-link">Читать дальше</router-link> <!--:to="{ path: '/adults-articles-current/' + article.id, params: { isBlog: article.isBlog } }"-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles']
}
</script>
