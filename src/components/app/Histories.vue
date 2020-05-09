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
      class="mini-histories d-block mx-auto"
      >
        <router-link tag="a" :to="{ path: '/kids-articles-current' }"> <!-- + history.id-->
          <img :src="history.url" width="345px" height="240px" alt="Kids mood and problem image" />
        </router-link>
        <p>{{ history.article.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    histories: {
      type: Object,
      required: true
    }
  }
  // data: () => ({
  //   histories: [
  //     { id: 4, img: 'img/Articles/article_img_4.svg', alt: 'Article 4', text: 'Интересы не совпадают. Я странный?' },
  //     { id: 5, img: 'img/Articles/article_img_5.svg', alt: 'Article 4', text: 'Каждый день меня бьют дома.' },
  //     { id: 2, img: 'img/Articles/article_img_2.svg', alt: 'Article 4', text: 'Меня не понимают' },
  //     { id: 3, img: 'img/Articles/article_img_3.svg', alt: 'Article 4', text: 'Унижают из-за внешности. Что со мной не так?!' },
  //     { id: 6, img: 'img/Articles/article_img_6.svg', alt: 'Article 4', text: 'Что - плохо, что - хорошо' },
  //     { id: 7, img: 'img/Articles/article_img_7.svg', alt: 'Article 4', text: 'Почему люди уходят?' }
  //   ]
  // })
}
</script>
