<template>
  <div class="wrap">
    <div class="messages" :class="{ owner: fromUser === owner}">
      <p>{{ text }}<span>{{ time | date('time') }}</span></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    fromUser: String,
    time: String,
    owner: String
  }
}
</script>
