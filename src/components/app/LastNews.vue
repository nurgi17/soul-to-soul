<template>
  <div class="body row">

    <div class="ver-article d-block mx-auto">
      <div class="article1 d-flex flex-row">
        <img :src="news[2].image.url" alt="Article 1" height="388px" class="mr-2 mb-2"/>
        <div class="ver-body">
          <h4>
            {{ news[2].title }}
          </h4>
          <p v-html="news[2].shortContent">
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>
    </div>

    <div class="hr-articles d-block mx-auto">

      <div class="article1 d-flex flex-row">
        <img :src="news[1].image.url" alt="Article 2" height="210px"  class="mr-2 mb-2"/>
        <div class="hor-body">
          <h6>
            {{ news[1].title }}
          </h6>
          <p v-html="news[1].shortContent"></p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

      <div class="article1 d-flex flex-row">
        <img :src="news[0].image.url" alt="Article 3" height="210px"  class="mr-2 mb-2"/>
        <div class="hor-body">
          <h6>
            {{ news[0].title }}
          </h6>
          <p v-html="news[0].shortContent"></p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'last-three-articles',
  props: ['news']
}
</script>
