<template>
  <div>
    <section id="how-are-you-feel-kids" :class="{kids2:choose}">
      <div class="container">
        <div class="main-feelings d-flex flex-column">
          <img v-if="choose" :src="question" alt="Question mark" height="64px" />
          <img :src="curFeeling" alt="Anonymous feeling" height="136px" />
          <h4>{{ mainText1.text1 }}</h4>
          <h4>
            {{ mainText1.text2 }}
            <span class="green-link">{{ mainText1.text3 || 'таким неопределенным' }}</span>?
          </h4>
          <div class="feelings d-flex flex-row justify-content-around">
            <a href class="mt-4 pt-3 mr-4" @click.prevent="slidePrev">
            <img src="img/Kids/prev.svg" width="40px" height="40px" alt="Prev arrow" />
            </a>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="feeling in feelings" :key="feeling.id" :class="feeling.class">
                <a @click="select(feeling.img, feeling.alt, feeling.id)">
                  <img :src="feeling.img" :alt="feeling.alt" />
                </a>
                <p :class="feeling.pc">{{ feeling.text }}</p>
              </slide>
              <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
            </hooper>
            <a href class="mt-4 pt-3" @click.prevent="slideNext">
            <img src="img/Kids/next.svg" width="40px" height="40px" alt="Next arrow" />
            </a>
          </div>
          <div class="prev-next-btns d-flex flex-wrap">
            <button class="btn btn-success" @click="change1(), choose=!choose, smth=!smth" :disabled="!choose">Назад</button>
            <button class="btn btn-primary" @click="change(), choose=!choose, smth=!smth" :class="{close:smth}">Вперед</button>
            <button class="btn btn-primary" @click.prevent="goArticles()" :class="{close:!smth}">Вперед</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'Choose',
  components: { Hooper, Slide },
  data: () => ({
    choose: false,
    smth: false,
    curFeeling: 'img/Kids/anonymus.svg',
    question: 'img/Kids/question.svg',
    mainText1: {
      text1: 'Привет!',
      text2: 'Как ты себя',
      text3: 'чувствуешь'
    },
    mainText2: {
      text1: 'Ох нет!',
      text2: 'Что тебя делает',
      text3: ''
    },
    mainText3: {
      text1: '',
      text2: '',
      text3: ''
    },
    changing: [],
    ids: {
      feel: 0,
      thing: 0
    },
    feelings: [
      {
        id: 1,
        class: '',
        pc: '',
        img: 'img/Kids/angry.svg',
        alt: 'злым',
        text: 'Злой'
      },
      {
        id: 2,
        class: '',
        pc: '',
        img: 'img/Kids/curiously.svg',
        alt: 'любопытным',
        text: 'Любопытно'
      },
      {
        id: 3,
        class: '',
        pc: '',
        img: 'img/Kids/shame.svg',
        alt: 'чувствовасть стыд',
        text: 'Стыдно'
      },
      {
        id: 4,
        class: '',
        pc: '',
        img: 'img/Kids/uncertainty.svg',
        alt: 'быть не уверенным',
        text: 'Не уверен'
      },
      {
        id: 5,
        class: '',
        pc: '',
        img: 'img/Kids/sadly.svg',
        alt: 'печальным',
        text: 'Печально'
      }
    ],
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
    select (img, alt, id) {
      if (!this.choose) {
        this.curFeeling = img
        this.mainText2.text3 = alt
        this.ids.feel = id
      } else {
        this.question = img
        this.ids.thing = id
      }
    },
    change () {
      this.changing = this.feelings
      this.feelings = this.things
      this.mainText3 = this.mainText1
      this.mainText1 = this.mainText2
    },
    change1 () {
      this.feelings = this.changing
      this.mainText1 = this.mainText3
    },
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    },
    goArticles () {
      console.log(this.ids.feel + ' ' + this.ids.thing)
      this.$router.push({
        name: 'kids-articles',
        params: {
          f: this.ids.feel,
          t: this.ids.thing
        }
      })
    }
  }
}
</script>
