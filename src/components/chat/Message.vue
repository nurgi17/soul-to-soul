<template>
  <div class="wrap">
    <div class="messages" :class="{owner}">
      <p>{{ text }}<span>{{ time }}</span></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    time: String,
    owner: {
      type: Boolean
    }
  }
}
</script>
