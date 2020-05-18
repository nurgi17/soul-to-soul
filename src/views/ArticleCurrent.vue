<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <section id="what-to-do">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="d-flex flex-row justify-content-around align-items-center">
          <a href @click.prevent="slidePrev">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Articles%2Fprev.svg?alt=media&token=1dc7c0e6-f937-430a-a062-61013631cf92"
              class="some-hidden"
              alt="Prev arrow"
            ></b-img-lazy>
          </a>
          <hooper ref="carousel" :settings="hooperSettings">
            <slide v-for="(slide, index) in article.images" :key="slide.id">
              <b-img-lazy
                :src="slide.url"
                class="what-images"
                width="632px"
                height="350px"
                alt="Current article img"
              ></b-img-lazy>
              <div class="current-article-body mb-5">
                <h2 class="mx-auto" v-html="head[index]"></h2>
                <p>{{ heads[index] }}</p>
              </div>
            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
          <a href @click.prevent="slideNext">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Articles%2Fnext.svg?alt=media&token=9c820365-4c1e-4082-9211-24de8e259b56"
              class="some-hidden"
              alt="Next arrow"
            ></b-img-lazy>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'kids-articles-current',
  components: { Hooper, Slide, HooperPagination },
  data: () => ({
    hooperSettings: {
      wheelControl: false
    },
    article: {},
    content: [],
    smth: [],
    head: [],
    heads: [],
    loading: true
  }),
  async mounted () {
    const id = this.$route.params.id
    await this.$store
      .dispatch('fetchArticleById', id)
      .then(res => {
        this.content = res.content.split('</div>')
        this.content.forEach(r => {
          this.smth = r.split('<br/>')
          this.head.push(this.smth[0])
          this.heads.push(this.smth[1])
        })
        this.article = res
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  methods: {
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>
