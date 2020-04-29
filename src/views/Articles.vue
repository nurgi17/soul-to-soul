<template>
  <div class="container">
    <section id="some-things-which-can-help-you">
      <div class="choosing d-flex flex-row justify-content-center">
        <div class="choosing-img d-flex flex-column">
          <img :src="imgThing[this.t].img" alt="Cloud of think"/>
          <img :src="imgFeel[this.f].img" alt="Sadly feel" />
        </div>
        <div class="choosing-title">
          <p>Вот некоторые вещи, которые могут тебе помочь!</p>
          <router-link class="green-link" tag="a" to="/kids-choose">Поменять</router-link>
        </div>
      </div>
      <!-- <Loader v-if="loading"/> -->
      <Histories /> <!--v-else :histories="histories"-->
      <Loader/>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/app/Footer.vue'
import Histories from '@/components/app/Histories.vue'
export default {
  name: 'kids-articles',
  props: ['f', 't'],
  components: { Footer, Histories },
  data: () => ({
    // histories: {},
    // loading: true,
    imgFeel: [
      {
        id: 0,
        img: 'img/Kids/anonymus.svg'
      },
      {
        id: 1,
        img: 'img/Kids/angry.svg'
      },
      {
        id: 2,
        img: 'img/Kids/curiously.svg'
      },
      {
        id: 3,
        img: 'img/Kids/shame.svg'
      },
      {
        id: 4,
        img: 'img/Kids/uncertainty.svg'
      },
      {
        id: 5,
        img: 'img/Kids/sadly.svg'
      }
    ],
    imgThing: [
      {
        id: 0,
        img: 'img/Kids/cloud_0.svg'
      },
      {
        id: 1,
        img: 'img/Kids/cloud_1.svg'
      },
      {
        id: 2,
        img: 'img/Kids/cloud_2.svg'
      },
      {
        id: 3,
        img: 'img/Kids/cloud_3.svg'
      },
      {
        id: 4,
        img: 'img/Kids/cloud_4.svg'
      },
      {
        id: 5,
        img: 'img/Kids/cloud_5.svg'
      }
    ]
  })
  // async mounted () {
  //   const ids = {
  //     mood: this.f,
  //     problem: this.t
  //   }
  //   await this.$store.dispatch('fetchArticleByMoodAndProblem', ids)
  //     .then(res => {
  //       this.histories = res
  //       this.loading = false
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.loading = false
  //     })
  // }
}
</script>
