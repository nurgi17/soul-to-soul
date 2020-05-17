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
            <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fprev.svg?alt=media&token=0a97fb72-0994-4fd7-9365-414b614ed563" width="40px" height="40px" alt="Prev arrow" ></b-img-lazy>
            </a>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="feeling in things" :key="feeling.id" :class="feeling.class">
                <a @click="select(feeling.id)">
                  <b-img-lazy :src="feeling.img" :alt="feeling.alt" :width="feeling.width" :height="feeling.height"></b-img-lazy>
                </a>
                <p :class="feeling.pc">{{ feeling.text }}</p>
              </slide>
            </hooper>
            <a href class="mt-4 pt-3" @click.prevent="slideNext">
            <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fnext.svg?alt=media&token=6a310772-8286-4918-a03e-5d68ab25da26" width="40px" height="40px" alt="Next arrow" ></b-img-lazy>
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
            <a href @click.prevent="goArticles(f.id)"
              ><b-img-lazy
                :src="f.image.url"
                class="w-100"
                height="375px"
                alt="Article image"
            ></b-img-lazy></a>
            <div class="d-flex flex-column mt-2">
              <h4>{{ f.title }}</h4>
              <p v-html="f.shortContent"></p>
              <a href @click.prevent="goArticles(f.id)"  class="green-link">Читать дальше</a>
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
          img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fhome.svg?alt=media&token=d7fe383d-547c-49f9-9f02-971089f44104',
          alt: 'Home',
          text: 'Моя семья и дом',
          width: '100px',
          height: '110px'
        },
        {
          id: 2,
          class: '',
          pc: 'pt-1',
          img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fschool-min.jpg?alt=media&token=884655b8-4826-4748-81ad-008826a10c57',
          alt: 'School',
          text: 'Моя школа',
          width: '113px',
          height: '110px'
        },
        {
          id: 3,
          class: '',
          pc: '',
          img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Finternet.svg?alt=media&token=77af4a72-5bca-4ecb-a209-6150325a4340',
          alt: 'Internet',
          text: 'Что-то в интернете',
          width: '114px',
          height: '110px'
        },
        {
          id: 4,
          class: '',
          pc: 'pt-3',
          img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Ffriends.svg?alt=media&token=f72562b2-8713-4cb5-a883-f3be8d220a73',
          alt: 'Friends',
          text: 'Мои друзья',
          width: '101px',
          height: '110px'
        },
        {
          id: 5,
          class: '',
          pc: 'pt-1',
          img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fself-min.jpg?alt=media&token=67573c09-20b5-4d4b-91a6-6ed2c901ce87',
          alt: 'Self',
          text: 'Что-то обо мне',
          width: '111px',
          height: '110px'
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
      articles: [],
      first: [],
      reserved: []
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchArticleByCategory', 2)
      .then(res => {
        this.loading = false
        this.first.push(res[0])
        this.first.push(res[1])
        res.shift()
        res.shift()
        this.articles = res
        res.push(this.first[0])
        res.push(this.first[1])
        this.reserved = res
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
    },
    goArticles (id) {
      this.$store.commit('setBlog', false)
      this.$router.push({
        path: '/adults-articles-current/' + id
      })
    }
  }
}
</script>
