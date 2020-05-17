<template>
  <div class="container">
    <section id="some-things-which-can-help-you">
      <div class="choosing d-flex flex-row justify-content-center">
        <div class="choosing-img d-flex flex-column">
          <b-img-lazy :src="imgThing[this.problem].img" alt="Cloud of think" width="148px" height="94px" ></b-img-lazy>
          <b-img-lazy
            :src="imgFeel[this.mood].img"
            alt="Sadly feel"
            :width="imgFeel[this.mood].width"
            height="121px"
          ></b-img-lazy>
        </div>
        <div class="choosing-title">
          <p>Вот некоторые вещи, которые могут тебе помочь!</p>
          <router-link class="green-link" tag="a" to="/kids-choose">Поменять</router-link>
        </div>
      </div>
      <Loader :loading="loading" v-if="loading" />
      <section v-else>
        <Histories :histories="items" />
       <Paginate
             v-model="page"
             :page-count="pageCount"
             :click-handler="pageChangeHandler"
             :prev-text="'Назад'"
             :next-text="'Вперед'"
             :container-class="'pagination justify-content-center pagination-lg'"
             :page-class="'page-item'"
             :page-link-class="'page-link'"
             :prev-class="'page-item'"
             :prev-link-class="'page-link'"
             :next-class="'page-item'"
             :next-link-class="'page-link'"
            />
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/app/Footer.vue'
import Histories from '@/components/app/Histories.vue'
import paginationMixin from '@/mixins/pagination.mixin'
export default {
  name: 'kids-articles',
  mixins: [paginationMixin],
  components: { Footer, Histories },
  data: () => ({
    histories: {},
    loading: true,
    imgFeel: [
      {
        id: 0,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fanonymus.svg?alt=media&token=d4d53931-9ee7-418a-a0f9-0613a30c4737',
        width: '148px'
      },
      {
        id: 1,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fangry.svg?alt=media&token=56af89ab-34db-4fa4-819b-df41a04849d9',
        width: '148px'
      },
      {
        id: 2,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcuriously.svg?alt=media&token=4e1804ad-4621-41b8-b169-d99cc5855768',
        width: '148px'
      },
      {
        id: 3,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fshame.svg?alt=media&token=3a4841b3-f084-47fa-9b8f-112c5544bd81',
        width: '148px'
      },
      {
        id: 4,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Funcertainty.svg?alt=media&token=558f0365-27bd-452b-9de8-b84fd4f955fc',
        width: '148px'
      },
      {
        id: 5,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fsadly.svg?alt=media&token=30197ae7-dd32-46d0-8b0e-5378fdd4bc1e',
        width: '132px'
      }
    ],
    imgThing: [
      {
        id: 0,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_0.svg?alt=media&token=c461bba5-0a34-48d7-bc11-fad0ffebc5a3'
      },
      {
        id: 1,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_1-min.jpg?alt=media&token=0bf22474-f606-44db-8a90-3e8ce89d4ff5'
      },
      {
        id: 2,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_2-min.jpg?alt=media&token=2c4feaae-3aeb-4a0d-90aa-03b40b3e973a'
      },
      {
        id: 3,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_3-min.jpg?alt=media&token=8a7fba21-2b82-4976-bbdd-d9047f6f239f'
      },
      {
        id: 4,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_4.svg?alt=media&token=f793358a-9c97-40a7-932d-48ea91e79006'
      },
      {
        id: 5,
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Kids%2Fcloud_5.svg?alt=media&token=7e17d3f7-4413-4d6e-839e-5cc6700d43d6'
      }
    ]
  }),
  async mounted () {
    const mood = this.mood
    const problem = this.problem
    await this.$store
      .dispatch('fetchArticleByCategory', 1)
      .then(res => {
        if (problem === 0) {
          this.histories = Object.values(res).filter(function (r) {
            return r.moodId === mood
          })
        } else {
          this.histories = Object.values(res).filter(function (r) {
            return r.problemId === problem
          })
        }
        if (problem === 0 && mood === 0) {
          this.histories = Object.values(res)
        }
        this.setupPagination(this.histories)
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  computed: {
    mood () {
      return this.$store.getters.mood
    },
    problem () {
      return this.$store.getters.problem
    }
  }
}
</script>
