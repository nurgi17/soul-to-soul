<template>
  <div class="input-group">
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
    <input v-model="text" type="text" class="form-control shadow-none" aria-label="Amount (to the nearest dollar)" />
    <div class="input-group-append">
      <span class="input-group-text">
        <a href class="last-icon" @click.prevent="send">
          <b-img-lazy v-if="sendButton"
            src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fmoderator_send.svg?alt=media&token=389bf9a9-6a31-47a9-82e1-462440e78436"
            alt="Send button"
          ></b-img-lazy>
          <b-img-lazy v-else
            src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fuser_send.svg?alt=media&token=f6a693be-170b-4785-b750-dc50fb33e2ce"
            alt="Send button"
          ></b-img-lazy>
        </a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    text: ''
  }),
  computed: {
    sendButton () {
      return localStorage.getItem('role') === '2'
    },
    getMessages () {
      return this.$store.getters.messages
    }
  },
  methods: {
    send () {
      this.$emit('sendNewMessages', this.text)
      this.text = ''
    }
  }
}
</script>
