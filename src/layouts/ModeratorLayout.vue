<template>
  <div id="moderator-main" class="row">
    <ModeratorSidebar @close="isClose = !isClose" v-model="isClose"/>
    <div :class="{'col-9': isClose, 'col-10': !isClose}">
      <ModeratorNavbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import ModeratorNavbar from '@/components/moderator/ModeratorNavbar.vue'
import ModeratorSidebar from '@/components/moderator/ModeratorSidebar.vue'
export default {
  name: 'moderator-layout',
  data: () => ({
    isClose: false
  }),
  components: {
    ModeratorNavbar,
    ModeratorSidebar
  }
}
</script>
