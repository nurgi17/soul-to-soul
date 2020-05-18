<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div class="container">
      <div class="row">
        <div class="sidebar col-sm-3">
          <div class="mb-4">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fcomplain.svg?alt=media&token=10a95deb-660b-4381-b257-6b7c47271d4d"
              alt="Complain button"
            ></b-img-lazy>
            <a
              href
              class="ml-2"
              data-toggle="modal"
              data-target="#complaint"
              @click="modal('complaint')"
            >Пожаловаться</a>
          </div>
          <div>
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Ffeedback.svg?alt=media&token=19e8f3fa-242f-439f-8185-cb61bdfc092b"
              alt="Feedback button"
            ></b-img-lazy>
            <a
              href
              class="ml-2"
              data-toggle="modal"
              data-target="#feedback"
              @click="modal('feedback')"
            >Оставить отзыв</a>
          </div>
        </div>
        <div class="chat col-12 col-sm-9">
          <div class="input-group mb-3">
            <div class="input-group-prepend first-icon">
              <span class="input-group-text">
                <a href class>
                  <b-img-lazy
                    src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fclip.svg?alt=media&token=9d59090d-0249-4867-bdaf-afeaa75e8325"
                    alt="Clip icon"
                  ></b-img-lazy>
                </a>
              </span>
            </div>
            <div class="input-group-prepend middle-icon">
              <span class="input-group-text">
                <a href class>
                  <b-img-lazy
                    src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsmile.svg?alt=media&token=77fae23b-5cb6-485d-9778-b7327a9df836"
                    alt="Smile icon"
                  ></b-img-lazy>
                </a>
              </span>
            </div>
            <input
              type="text"
              class="form-control shadow-none"
              aria-label="Amount (to the nearest dollar)"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <a href class="last-icon">
                  <b-img-lazy
                    src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fuser_send.svg?alt=media&token=f6a693be-170b-4785-b750-dc50fb33e2ce"
                    alt="Send button"
                  ></b-img-lazy>
                </a>
              </span>
            </div>
          </div>

          <div class="messages">
            <ul>
              <li class="sent">
                <p>
                  <span>12:23</span> Какой-то текст
                </p>
              </li>
              <li class="sent">
                <p>
                  <span>12:23</span> Какой-то текст
                </p>
              </li>
              <li class="reply">
                <p>
                  Какой-то текст
                  <span>12:23</span>
                </p>
              </li>
              <li class="reply">
                <p>
                  Какой-то текст
                  <span>12:23</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content modal-exit">
            <h4>Сохранить чат?</h4>
            <p>Зарегистрируйтесь и сохраните чат</p>
            <div class="d-flex flex-row justify-content-between">
              <router-link
                tag="a"
                to="/register"
                class="save-chat"
                data-dismiss="modal"
              >Зарегистрироваться</router-link>
              <router-link tag="a" to="/" class="leave-chat" data-dismiss="modal">Выйти с чата</router-link>
            </div>
          </div>
        </div>
      </div>
      <Modal @emittidText="sendFC" :modal="modal1" />
    </div>
  </div>
</template>
<script>
import Modal from '@/components/app/Modal.vue'
import messages from '@/utils/messages'
export default {
  data: () => ({
    modal1: {
      id: '',
      title: '',
      text: ''
    },
    loading: false
  }),
  components: {
    Modal
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    modal (id) {
      this.modal1.id = id
      if (id === 'complaint') {
        this.modal1.title = 'Пожаловаться'
      } else {
        this.modal1.title = 'Оставить отзыв'
      }
    },
    async sendFC (value) {
      this.loading = true
      this.modal1.text = value
      await this.$store
        .dispatch('feedbackAndComplaint', this.modal1)
        .then(res => {
          this.loading = false
          if (this.modal1.id === 'complaint') {
            this.$message(messages.complaint)
          } else {
            this.$message(messages.feedback)
          }
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    }
  }
}
</script>
