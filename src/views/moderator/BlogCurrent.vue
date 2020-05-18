<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div v-else class="row">
      <div class="col-3">
        <div class="m-sidebar-current">
          <div class="d-flex flex-column">
            <router-link tag="a" to="/moderator-check">
              <b-img-lazy
                src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fleft_arrow.svg?alt=media&token=ee760003-768f-46ba-a565-6c56f802d176"
                alt="Left arrow icon"
              ></b-img-lazy>
              <span class="blue">Назад</span>
            </router-link>
            <a href>
              <span class="grey">Ваши действия</span>
            </a>
            <a href @click.prevent="check('ACCEPTED')">
              <span class="green">Принять</span>
            </a>
            <a href data-toggle="modal" data-target="#reject">
              <span class="red">Отклонить</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="m-blog-current">
          <h1>{{ currentBlog.title }}</h1>
          <div v-if="currentBlog.images.length!==0">
            <b-img-lazy
              :src="currentBlog.images[0].url"
              alt="Don't fucking procrastinate"
              width="800px"
              height="300px"
            ></b-img-lazy>
          </div>
          <p v-html="currentBlog.content"></p>
        </div>
      </div>
    </div>
    <Modal @emittidText="check" :modal="modal1" />
  </div>
</template>
<script>
import Modal from '@/components/app/Modal.vue'
export default {
  data () {
    return {
      loading: true,
      currentBlog: {},
      modal1: {
        id: 'reject',
        title: 'Причина отклонение блога',
        text: ''
      }
    }
  },
  components: {
    Modal
  },
  async mounted () {
    const ids = {
      id: this.$route.params.id,
      check: 2
    }
    await this.$store
      .dispatch('fetchBlogById', ids)
      .then(res => {
        this.loading = false
        this.currentBlog = res
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  methods: {
    async check (value) {
      this.loading = true
      if (value === 'ACCEPTED') {
        this.currentBlog.status = 'ACCEPTED'
      } else {
        this.currentBlog.status = 'DENIED'
        this.currentBlog.comment = value
      }
      await this.$store
        .dispatch('updateBlog', this.currentBlog)
        .then(res => {
          this.loading = false
          this.$router.push('/moderator-check?message=blogChecked')
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    }
  }
}
</script>
