<template>
  <div class="histories">
    <div class="histories-title">
      <h1>Эти истории могут помочь...</h1>
      <p>
        Думаешь это не поможет то
        <router-link class="green-link ml-2 mr-2" tag="a" to="/chat">Напиши</router-link>или
        <a href="tel:87026525298" class="green-link ml-2">Позвони нам</a>
      </p>
    </div>
    <div class="head-histories row">
      <div
        v-for="history in histories"
        :key="history.id"
        class="mini-histories d-block mx-auto mb-4"
      >
        <router-link tag="a" :to="{ path: '/kids-articles-current/' + history.id }">
          <b-img-lazy
            :src="history.image.url"
            width="345px"
            height="240px"
            alt="Kids mood and problem image"
          ></b-img-lazy>
        </router-link>
        <p>{{ history.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['histories']
}
</script>
