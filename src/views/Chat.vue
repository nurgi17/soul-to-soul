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
        <!--Chat Form ----------------------------------------------------------------------------------------------->
        <div class="chat col-12 col-sm-9">
          <div class="c-chat h-100" ref="block">
            <div class="text-center mt-5 pt-5" v-if="allMessages.length === 0">Если вам нужна помощь, просто начните веб-чат</div>
            <Message v-else v-for="m in allMessages" :key="m.id" :text="m.content" :fromUser="m.fromUser" :time="m.sendTime" :owner="fromUser" />
          </div>
          <div class="c-form">
            <ChatForm @sendNewMessages="send"/>
          </div>
        </div>
        <!--Chat Form ----------------------------------------------------------------------------------------------->
      </div>
      <Modal @emittidText="sendFC" :modal="modal1" />
    </div>
  </div>
</template>
<script>
import Modal from '@/components/app/Modal.vue'
import ChatForm from '@/components/chat/ChatForm.vue'
import Message from '@/components/chat/Message.vue'
import messages from '@/utils/messages'
export default {
  data: () => ({
    modal1: {
      id: '',
      title: '',
      text: ''
    },
    loading: true
  }),
  components: {
    Modal, ChatForm, Message
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
    const users = {
      fromUser: this.fromUser,
      toUser: this.toUser
    }
    this.$store.dispatch('connect', users)
      .then(res => {
        this.loading = false
        console.log(res)
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  beforeDestroy () {
    this.$store.dispatch('disconnect')
  },
  computed: {
    allMessages () {
      return this.$store.getters.messages
    },
    fromUser () {
      return this.$store.getters.fromUser
    },
    toUser () {
      return this.$store.getters.toUser
    }
  },
  watch: {
    allMessages () {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      })
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
    },
    send (value) {
      const today = new Date()
      const jaiMsg = {
        id: this.allMessages[this.allMessages.length - 1].id + 1,
        content: value,
        fromUser: this.fromUser,
        toUser: this.toUser,
        sendTime: today.toString()
      }
      this.$store.commit('newMessage', jaiMsg)
      const inMessage = {
        toUser: this.toUser,
        fromUser: this.fromUser,
        content: value
      }
      this.$store.dispatch('sendNewMessage', inMessage)
    }
  }
}
</script>
