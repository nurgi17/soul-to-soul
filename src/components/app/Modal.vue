<template>
  <div class="modal fade" :id="modal.id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content complaint-feedback">
        <h4>{{ modal.title }}</h4>
        <textarea placeholder="Напишите сюда...." v-model="text"></textarea>
        <div class="d-flex flex-row justify-content-between">
          <a href class="cancel font-weight-bold" data-dismiss="modal" @click.prevent="clear">Отмена</a>
          <a
            href
            class="send font-weight-bold"
            data-dismiss="modal"
            @click.prevent="emitToPr"
          >Отправить</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  props: ['modal'],
  methods: {
    emitToPr () {
      this.$emit('emittidText', this.text)
      this.text = ''
    },
    clear () {
      this.text = ''
    }
  }
}
</script>
