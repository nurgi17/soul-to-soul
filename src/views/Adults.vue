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
        <Buttons/>
      </section>

      <section id="adults-articles">
        <div class="row">
          <div class="col-12 col-sm-6 mb-4 pb-2">
            <router-link tag="a" to="/adults-articles-current"
              ><img
                src="img/Articles/article_img_4.svg"
                class="w-100"
                alt="Article 4"
            /></router-link>
            <div class="d-flex flex-column">
              <h4>Интересы не совпадают. Я странный?</h4>
              <p>Даже родители меня не слушают о чем я говорю.</p>
              <router-link tag="a" to="/adults-articles-current"  class="green-link">Читать дальше</router-link>
            </div>
          </div>
          <div class="col-12 col-sm-6 mb-4 pb-2">
            <router-link tag="a" to="/adults-articles-current"
              ><img
                src="img/Articles/article_img_5.svg"
                class="w-100"
                alt="Article 4"
            /></router-link>
            <div class="d-flex flex-column">
              <h4>Каждый день меня бьют дома.</h4>
              <p>Даже родители меня не слушают о чем я говорю.</p>
              <router-link tag="a" to="/adults-articles-current"  class="green-link">Читать дальше</router-link>
            </div>
          </div>
          <Articles/>
        </div>
      </section>
      <Loader/>
      <Footer/>
</div>
</template>
<script>
import Footer from '@/components/app/Footer.vue'
import Buttons from '@/components/app/Buttons.vue'
import Loader from '@/components/app/Loader.vue'
import Articles from '@/components/app/Articles.vue'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: { Footer, Buttons, Loader, Articles, Hooper, Slide },
  data: () => ({
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
    }
  }),
  methods: {
    select (id) {
      console.log(id)
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
