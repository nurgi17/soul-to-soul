<template>
  <div class="m-sidebar" :class="{'col-3': value, 'col-2': !value}">
    <div class="d-flex flex-column">
      <a href="#" @click.prevent="$emit('close')">
        <b-img-lazy v-if="!value" :src="burger_bar" alt="Burger bar icon"></b-img-lazy>
        <b-img-lazy v-else :src="close" alt="Burger bar icon"></b-img-lazy>
        <span :class="{close: !value}">Закрыть</span>
      </a>
      <router-link v-for="link in links" :key="link.url" tag="a" :to="link.url" :exact="link.exact">
        <b-img-lazy :src="link.img" :alt="link.alt"></b-img-lazy>
        <span :class="{close: !value}">{{ link.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    burger_bar:
      'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fburger_bar.svg?alt=media&token=373b6b87-93a3-4674-b847-3bd85ce84f8b',
    close:
      'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fclose.svg?alt=media&token=1da21e9a-5084-44dd-972b-4403cfef0cd5',
    links: [
      {
        title: 'Домашняя страница',
        url: '/moderator',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fhome.svg?alt=media&token=8c212c7a-5e64-4d4d-be1e-5dfb9a2515a9',
        alt: 'Home icon',
        exact: true
      },
      {
        title: 'Собеседники',
        url: '/moderator-chat',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Finterlocutor.svg?alt=media&token=f783f80a-9b5b-4391-a541-c0a24181ad71',
        alt: 'Interlocutor icon'
      },
      {
        title: 'Блог',
        url: '/moderator-check',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fblog.svg?alt=media&token=2ff7192e-ce15-4675-993f-eb4422e00886',
        alt: 'Blog icon'
      }
    ]
  })
}
</script>
