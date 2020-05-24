<template>
  <div class="row">
    <div class="m-sidebar-chat col-sm-3">
      <div class="mb-1">
        <span class="blue">4 новых запроса</span>
      </div>
      <div class="d-flex flex-row m-message">
        <b-img-lazy
          src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Moderator%2Favatar-min.jpg?alt=media&token=05a7d35a-7e6f-4fc4-ae10-f359c68e0823"
          width="40px"
          height="40px"
          style="border-radius:50%;"
          alt="Feedback button"
        ></b-img-lazy>
        <div class="d-flex flex-column ml-2">
          <div class="d-flex flex-row justify-content-between">
            <h3>user123</h3>
            <span class="grey">13:14</span>
          </div>
          <div class="d-flex flex-row">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsend.svg?alt=media&token=8978a300-9aac-4c70-8273-5fd32d31ccec"
              alt="Send icon"
            ></b-img-lazy>
            <span>Добрый день. Мне нужна...</span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row m-message">
        <b-img-lazy
          src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Moderator%2Favatar-min.jpg?alt=media&token=05a7d35a-7e6f-4fc4-ae10-f359c68e0823"
          width="40px"
          height="40px"
          style="border-radius:50%;"
          alt="Feedback button"
        ></b-img-lazy>
        <div class="d-flex flex-column ml-2">
          <div class="d-flex flex-row justify-content-between">
            <h3>user123</h3>
            <span class="grey">13:14</span>
          </div>
          <div class="d-flex flex-row">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fread.svg?alt=media&token=062e65a1-6399-45db-ae5e-f730015af0be"
              alt="Read icon"
            ></b-img-lazy>
            <span>Добрый день. Мне нужна...</span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row m-message">
        <b-img-lazy
          src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Moderator%2Favatar-min.jpg?alt=media&token=05a7d35a-7e6f-4fc4-ae10-f359c68e0823"
          width="40px"
          height="40px"
          style="border-radius:50%;"
          alt="Feedback button"
        ></b-img-lazy>
        <div class="d-flex flex-column ml-2">
          <div class="d-flex flex-row justify-content-between">
            <h3>user123</h3>
            <span class="grey">13:14</span>
          </div>
          <div class="d-flex flex-row">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsend.svg?alt=media&token=8978a300-9aac-4c70-8273-5fd32d31ccec"
              alt="Send icon"
            ></b-img-lazy>
            <span>Добрый день. Мне нужна...</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat col-12 col-sm-9">
      <div class="c-chat h-100" ref="block">
        <Message v-for="m in messages" :key="m.id" :text="m.text" :time="m.time" :owner="m.owner" />
      </div>
      <div class="c-form">
        <ChatForm />
      </div>
    </div>
  </div>
</template>

<script>
import ChatForm from '@/components/chat/ChatForm.vue'
import Message from '@/components/chat/Message.vue'
export default {
  components: {
    ChatForm, Message
  },
  computed: {
    messages () {
      return [
        { id: 1, text: 'Здраствуйте', time: '12:23', owner: true },
        { id: 2, text: 'Привет', time: '12:23', owner: false },
        { id: 3, text: 'У меня проблемы в школе', time: '12:23', owner: true },
        { id: 4, text: 'Какие?', time: '12:23', owner: false },
        { id: 5, text: 'Ну вы понимаете', time: '12:23', owner: true },
        { id: 6, text: 'Они меня обижают', time: '12:23', owner: true },
        { id: 7, text: 'Что я очень глупый', time: '12:23', owner: true },
        { id: 8, text: 'Еще что то?', time: '12:23', owner: false },
        { id: 9, text: 'Нет все из за этого', time: '12:23', owner: true },
        { id: 10, text: 'Тогда', time: '12:23', owner: false },
        { id: 11, text: 'Ну и', time: '12:23', owner: true },
        { id: 12, text: 'Иногда бывает такое ты не думай об этом и все.', time: '12:23', owner: false },
        { id: 13, text: 'Ну ладно', time: '12:23', owner: true },
        { id: 14, text: 'Думаю это может', time: '12:23', owner: true },
        { id: 15, text: 'Спасибо вам', time: '12:23', owner: true },
        { id: 16, text: 'Незачто', time: '12:23', owner: false }
      ]
    }
  },
  watch: {
    messages () {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      })
    }
  }
}
</script>
