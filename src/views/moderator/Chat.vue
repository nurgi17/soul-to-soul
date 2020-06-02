<template>
  <div>
    <Loader :loading="loading" v-if="loading" />
    <div class="row">
      <div class="m-sidebar-chat col-sm-3">
        <div class="mb-1">
          <span class="blue">{{ interculators.length }} собеседника</span>
        </div>
        <div
          class="d-flex flex-row m-message"
          v-for="i in interculators"
          :key="i.id"
          @click.prevent="selected(i.fromUser)"
        >
          <div class="ml-2">
            <div class="d-flex flex-row">
              <h3>{{ i.fromUser }}</h3>
              <span class="grey ml-2">{{ i.sendTime | date('datetime') }}</span>
            </div>
            <div class="d-flex flex-row align-items-center">
              <b-img-lazy
                src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsend.svg?alt=media&token=8978a300-9aac-4c70-8273-5fd32d31ccec"
                alt="Send icon"
              ></b-img-lazy>
              <span>{{ i.content }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat col-12 col-sm-9">
        <div class="c-chat h-100" ref="block">
          <Message
            v-for="m in allMessages"
            :key="m.id"
            :text="m.content"
            :fromUser="m.fromUser"
            :time="m.sendTime"
            :owner="fromUser"
          />
        </div>
        <div class="c-form">
          <ChatForm @sendNewMessages="send" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatForm from '@/components/chat/ChatForm.vue'
import Message from '@/components/chat/Message.vue'
export default {
  data: () => ({
    loading: true
  }),
  components: {
    ChatForm,
    Message
  },
  computed: {
    allMessages () {
      return this.$store.getters.messages
    },
    interculators () {
      return this.$store.getters.interculators
    },
    fromUser () {
      return this.$store.getters.fromUser
    },
    toUser () {
      return this.$store.getters.toUser
    },
    subscription () {
      return this.$store.getters.subs
    }
  },
  watch: {
    allMessages () {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      })
    }
  },
  mounted () {
    this.$store
      .dispatch('connectModerator', this.fromUser)
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
  methods: {
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
    },
    selected (fromUser) {
      this.$store.commit('clearMessages')
      this.$store.commit('setToUser', fromUser)
      this.loading = true
      const users = {
        fromUser: this.fromUser,
        toUser: fromUser,
        subs: this.subscription
      }
      this.$store.dispatch('selectedUser', users)
        .then(res => {
          this.loading = false
          console.log(res)
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    }
  }
}
</script>
