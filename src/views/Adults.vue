<template>
<div class="container">
    <section class="kids2" id="how-are-you-feel-kids-1">
        <div class="container">
          <div class="main-feelings d-flex flex-column">
            <h4 class="font-weight-bold">
              Чем мы можем <span class="green-link">помочь</span> ?
            </h4>
            <h4 class="font-weight-bold">
              Мы здесь, чтобы помочь тебе с чем угодно! Вещи как:
            </h4>
            <div class="feelings d-flex flex-row justify-content-around">
            <a href class="mt-4 pt-3 mr-4" @click.prevent="slidePrev">
            <img src="img/Kids/prev.svg" width="40px" height="40px" alt="Prev arrow" />
            </a>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="feeling in things" :key="feeling.id" :class="feeling.class">
                <a @click="select(feeling.id)">
                  <img :src="feeling.img" :alt="feeling.alt" />
                </a>
                <p :class="feeling.pc">{{ feeling.text }}</p>
              </slide>
            </hooper>
            <a href class="mt-4 pt-3" @click.prevent="slideNext">
            <img src="img/Kids/next.svg" width="40px" height="40px" alt="Next arrow" />
            </a>
          </div>
          </div>
        </div>
      </section>

      <section id="you-are-not-alone-1">
        <p class="text-center">
          Вы можете рассказать нам больше о том, с чем вам нужна помощь?
        </p>
        <Buttons />
      </section>

      <Loader v-if="loading" />
      <section v-else id="adults-articles">
        <div class="row">
          <div v-for="f in first" :key="f.id" class="col-12 col-sm-6 mb-4 pb-2">
            <router-link tag="a" to="/adults-articles-current"
              ><img
                :src="f.image.url"
                class="w-100"
                height="375px"
                alt="Article image"
            /></router-link>
            <div class="d-flex flex-column mt-2">
              <h4>{{ f.title }}</h4>
              <p v-html="f.shortContent"></p>
              <router-link tag="a" :to="{ path: '/adults-articles-current/' + f.id}"  class="green-link">Читать дальше</router-link>
            </div>
          </div>
          <Articles :articles="articles"/>
        </div>
      </section>
      <Footer/>
</div>
</template>
<script>
import Footer from '@/components/app/Footer.vue'
import Buttons from '@/components/app/Buttons.vue'
import Articles from '@/components/app/Articles.vue'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: { Footer, Buttons, Articles, Hooper, Slide },
  data () {
    return {
      things: [
        {
          id: 1,
          class: 'home',
          pc: 'pt-3',
          img: 'img/Kids/home.svg',
          alt: 'Home',
          text: 'Моя семья и дом'
        },
        {
          id: 2,
          class: '',
          pc: 'pt-1',
          img: 'img/Kids/school.svg',
          alt: 'School',
          text: 'Моя школа'
        },
        {
          id: 3,
          class: '',
          pc: '',
          img: 'img/Kids/internet.svg',
          alt: 'Internet',
          text: 'Что-то в интернете'
        },
        {
          id: 4,
          class: '',
          pc: 'pt-3',
          img: 'img/Kids/friends.svg',
          alt: 'Friends',
          text: 'Мои друзья'
        },
        {
          id: 5,
          class: '',
          pc: 'pt-1',
          img: 'img/Kids/self.svg',
          alt: 'Self',
          text: 'Что-то обо мне'
        }
      ],
      hooperSettings: {
        itemsToShow: 5,
        infiniteScroll: true,
        wheelControl: false,
        breakpoints: {
          320: {
            itemsToShow: 1
          },
          474: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 5
          }
        }
      },
      loading: true,
      articles: {},
      first: [],
      reserved: {}
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchArticleByCategory', 2)
      .then(res => {
        this.first.push(res[0])
        this.first.push(res[1])
        this.articles = res
        this.reserved = res
        this.articles.splice(0, 1)
        this.articles.splice(0, 1)
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что то пошло не так')
      })
  },
  methods: {
    select (id) {
      this.first = []
      this.articles = {}
      this.articles = Object.values(this.reserved).filter(function (r) {
        return r.problemId === id
      })
      if (Object.keys(this.articles).length !== 0) {
        this.first.push(this.articles[0])
        this.first.push(this.articles[1])
        this.articles.splice(0, 1)
        this.articles.splice(0, 1)
      }
    },
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>
