<template>
<div class="row">
    <div
    v-for="article in articles"
    :key="article.id"
    class="col-12 col-sm-6">
      <div class="adults-articles-main d-flex flex-wrap">
        <router-link tag="a" to="/adults-articles-current">
          <img :src="article.img" class="w-100" :alt="article.alt" />
        </router-link>
        <div class="adults-article-body d-flex flex-column">
          <h4>{{ article.title }}</h4>
          <p>{{ article.text }}</p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    articles: [
      { id: 1, img: 'img/Articles/article_img_3.svg', alt: '', title: 'Унижают из-за внешности. Что со мной не так?!', text: 'В школе и на улице избегают меня словно я урод из цирка.' },
      { id: 2, img: 'img/Articles/article_img_2.svg', alt: '', title: 'Меня не понимают', text: 'Даже родители меня не слушают о чем я говорю.' },
      { id: 3, img: 'img/Articles/article_img_6.svg', alt: '', title: 'Что - плохо, что - хорошо', text: 'В школе и на улице избегают меня словно я урод из цирка.' },
      { id: 4, img: 'img/Articles/article_img_7.svg', alt: '', title: 'Смерть - это хорошо?', text: 'Даже родители меня не слушают о чем я говорю.' },
      { id: 5, img: 'img/Articles/article_img_2.svg', alt: '', title: 'Меня не понимают', text: 'Даже родители меня не слушают о чем я говорю.' },
      { id: 6, img: 'img/Articles/article_img_3.svg', alt: '', title: 'Унижают из-за внешности. Что со мной не так?!', text: 'В школе и на улице избегают меня словно я урод из цирка.' },
      { id: 7, img: 'img/Articles/article_img_7.svg', alt: '', title: 'Смерть - это хорошо?', text: 'Даже родители меня не слушают о чем я говорю.' },
      { id: 8, img: 'img/Articles/article_img_6.svg', alt: '', title: 'Что - плохо, что - хорошо', text: 'В школе и на улице избегают меня словно я урод из цирка.' }
    ]
  })
}
</script>
