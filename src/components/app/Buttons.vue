<template>
  <div class="buttons d-flex flex-wrap">
    <router-link
      v-for="b in buttons"
      :key="b.id"
      to="/blog"
      @click.native="tagF(b.text)"
      tag="button"
      class="btn btn-secondary"
    >{{ b.text }}</router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    buttons: [
      { id: '1', text: 'Печаль и депрессия' },
      { id: '2', text: 'Самоповреждение' },
      { id: '3', text: 'Апендикс' },
      { id: '4', text: 'Тема' },
      { id: '5', text: 'Какая-то тема' },
      { id: '6', text: 'Еще одна тема' }
    ]
  }),
  methods: {
    tagF (id) {
      this.$emit('tagFilter', id)
    }
  }
}
</script>
