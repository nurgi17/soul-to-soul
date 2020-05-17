<template>
  <div>
    <section id="how-are-you-feel-kids" :class="{kids2:choose}">
      <div class="container">
        <div class="main-feelings d-flex flex-column">
          <b-img-lazy class="mx-auto" v-if="choose" :src="question" alt="Question mark" height="64px" ></b-img-lazy>
          <b-img-lazy
            class="mx-auto"
            :src="curFeeling"
            alt="Anonymous feeling"
            :width="bigWidth"
            height="136px"
          ></b-img-lazy>
          <h4>{{ mainText1.text1 }}</h4>
          <h4>
            {{ mainText1.text2 }}
            <span
              class="green-link"
            >{{ mainText1.text3 || 'таким неопределенным' }}</span>?
          </h4>
          <div class="feelings d-flex flex-row justify-content-around">
            <a href class="mt-4 pt-3 mr-4" @click.prevent="slidePrev">
              <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fprev.svg?alt=media&token=0a97fb72-0994-4fd7-9365-414b614ed563" width="40px" height="40px" alt="Prev arrow" ></b-img-lazy>
            </a>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="feeling in feelings" :key="feeling.id" :class="feeling.class">
                <a @click="select(feeling.img, feeling.alt, feeling.id, feeling.width)">
                  <b-img-lazy :src="feeling.img" :alt="feeling.alt" :width="feeling.width" :height="feeling.height" ></b-img-lazy>
                </a>
                <p :class="feeling.pc">{{ feeling.text }}</p>
              </slide>
            </hooper>
            <a href class="mt-4 pt-3" @click.prevent="slideNext">
              <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fnext.svg?alt=media&token=6a310772-8286-4918-a03e-5d68ab25da26" width="40px" height="40px" alt="Next arrow" ></b-img-lazy>
            </a>
          </div>
          <div class="prev-next-btns d-flex flex-wrap">
            <button
              class="btn btn-success"
              @click="change1(), choose=!choose, smth=!smth"
              :disabled="!choose"
            >Назад</button>
            <button
              class="btn btn-primary"
              @click="change(), choose=!choose, smth=!smth"
              :class="{close:smth}"
            >Вперед</button>
            <button
              class="btn btn-primary"
              @click.prevent="goArticles()"
              :class="{close:!smth}"
            >Вперед</button>
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
    bigWidth: '168px',
    curFeeling:
      'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fanonymus.svg?alt=media&token=d4d53931-9ee7-418a-a0f9-0613a30c4737',
    question:
      'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fquestion.svg?alt=media&token=ea65f8a9-6ac1-41dc-87e5-b77b6652d3a4',
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
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fangry.svg?alt=media&token=56af89ab-34db-4fa4-819b-df41a04849d9',
        alt: 'злым',
        text: 'Злой',
        width: '148px',
        height: '121px'
      },
      {
        id: 2,
        class: '',
        pc: '',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcuriously.svg?alt=media&token=4e1804ad-4621-41b8-b169-d99cc5855768',
        alt: 'любопытным',
        text: 'Любопытно',
        width: '140px',
        height: '121px'
      },
      {
        id: 3,
        class: '',
        pc: '',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fshame.svg?alt=media&token=3a4841b3-f084-47fa-9b8f-112c5544bd81',
        alt: 'чувствовасть стыд',
        text: 'Стыдно',
        width: '148px',
        height: '121px'
      },
      {
        id: 4,
        class: '',
        pc: '',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Funcertainty.svg?alt=media&token=558f0365-27bd-452b-9de8-b84fd4f955fc',
        alt: 'быть не уверенным',
        text: 'Не уверен',
        width: '148px',
        height: '121px'
      },
      {
        id: 5,
        class: '',
        pc: '',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fsadly.svg?alt=media&token=30197ae7-dd32-46d0-8b0e-5378fdd4bc1e',
        alt: 'печальным',
        text: 'Печально',
        width: '136px',
        height: '121px'
      }
    ],
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
    }
  }),
  methods: {
    select (img, alt, id, width) {
      if (!this.choose) {
        this.curFeeling = img
        this.mainText2.text3 = alt
        this.ids.feel = id
        if (width === '136px') {
          this.bigWidth = '148px'
        } else if (width === '148px') {
          this.bigWidth = '168px'
        }
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
      this.$store.commit('setMood', this.ids.feel)
      this.$store.commit('setProblem', this.ids.thing)
      this.$router.push({
        name: 'kids-articles'
      })
    }
  }
}
</script>
