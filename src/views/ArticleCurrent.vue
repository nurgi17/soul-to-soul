<template>
<div>
   <section id="what-to-do">
        <div class="container">
            <h1>Что делать, если вам кто-то вредит</h1>
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <a href="" @click.prevent="slidePrev">
                        <img src="img/Articles/prev.svg" class="some-hidden" alt="Prev arrow">
                    </a>
                    <hooper ref="carousel" :settings="hooperSettings">
                        <slide
                        v-for="slide in whats" :key="slide.id">
                            <img :src="slide.img" class="what-images" alt="Current article img">
                            <div class="current-article-body mb-5">
                                <h2>{{ slide.title }}</h2>
                                <p v-html="slide.text"> {{ slide.text }}</p>
                            </div>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                    <a href="" @click.prevent="slideNext">
                        <img src="img/Articles/next.svg" class="some-hidden" alt="Next arrow">
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
  components: { Hooper, Slide, HooperPagination },
  data: () => ({
    whats: [
      { id: 1, img: 'img/Articles/current_img_1.svg', title: 'Некоторые дети боятся, что кто-то причинит им боль', text: 'Они могут думать, что это секрет, который они никому не могут рассказать. Они могут захотеть, чтобы это прекратилось, но не знают, как.<br><br> Они могут чувствовать себя одинокими. Это может быть страшно и запутанно.' },
      { id: 2, img: 'img/Articles/current_img_2.svg', title: 'Некоторые дети боятся, что кто-то причинит им боль', text: 'Поговорить с кем-то это может быть поможет.<br>Если ты чувствуешь себя плохо из-за того что тебя кто-то вредит<br><br><a href="tel:87026525298" class="green-link">позвони нам</a> или <a href="/chat" class="green-link">напиши нам</a>' }
    ],
    hooperSettings: {
      wheelControl: false
    }
  }),
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
