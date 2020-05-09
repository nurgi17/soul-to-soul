<template>
  <div class="body row">

    <div class="ver-article d-block mx-auto">
      <div class="article1 d-flex flex-row">
        <img :src="news['3'].url" alt="Article 1" height="388px"/>
        <div class="ver-body">
          <h4>
            {{ news['3'].article.title }}
          </h4>
          <p v-html="news['3'].article.shortContent">
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>
    </div>

    <div class="hr-articles d-block mx-auto">

      <div class="article1 d-flex flex-row">
        <img :src="news['2'].url" alt="Article 2" height="210px" />
        <div class="hor-body">
          <h6>
            {{ news['2'].article.title }}
          </h6>
          <p>
            {{ news['2'].article.shortContent }}
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

      <div class="article1 d-flex flex-row">
        <img :src="news['1'].url" alt="Article 3" height="210px" />
        <div class="hor-body">
          <h6>
            {{ news['1'].article.title }}
          </h6>
          <p>
            {{ news['1'].article.shortContent }}
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'last-three-articles',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>
