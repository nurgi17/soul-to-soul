<template>
  <div class="m-sidebar" :class="{'col-3': value, 'col-2': !value}">
    <div class="d-flex flex-column">
      <a href="#" @click.prevent="$emit('close')">
        <img v-if="!value" :src="burger_bar" alt="Burger bar icon"/>
        <img v-else :src="close" alt="Burger bar icon"/>
        <span :class="{close: !value}">Закрыть</span>
      </a>
      <router-link
      v-for="link in links"
      :key="link.url"
      tag="a"
      :to="link.url"
      :exact="link.exact">
        <img :src="link.img" :alt="link.alt"/>
        <span :class="{close: !value}">{{ link.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    burger_bar: 'img/Icons/burger_bar.svg',
    close: 'img/Icons/close.svg',
    links: [
      { title: 'Домашняя страница', url: '/moderator', img: 'img/Icons/home.svg', alt: 'Home icon', exact: true },
      { title: 'Собеседники', url: '/moderator-chat', img: 'img/Icons/interlocutor.svg', alt: 'Interlocutor icon' },
      { title: 'Блог', url: '/moderator-check', img: 'img/Icons/blog.svg', alt: 'Blog icon' }
    ]
  })
}
</script>
