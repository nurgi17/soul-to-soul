<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand">
        <b-img-lazy
          src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Flogo.svg?alt=media&token=8c31a302-87fc-4487-8ddb-6fec2fb884ad"
          width="76"
          height="62"
          class="d-inline-block align-top"
          alt="Logo of SoulToSoul"
        ></b-img-lazy>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto smooth-scroll">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            :to="link.url"
            active-class="active-navbar"
            class="nav-item"
            :exact="link.exact"
          >
            <a class="nav-link text-align-center" :class="link.class">{{ link.title }}</a>
          </router-link>
          <li class="nav-item mr-3">
            <a class="nav-link font-weight-bold" href="tel:87026525298">Позвони нам</a>
          </li>
          <li v-if="isLoggedIn&&isUser" class="nav-item profile">
            <div class="d-flex flex-column align-items-center">
              <a
                href
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="text-decoration-none"
              >
                <b-img-lazy
                  :src="isImage"
                  alt="Profile img"
                  width="40px"
                  height="40px"
                  style="border-radius: 50%;"
                ></b-img-lazy>
                <span>Мой профиль</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <router-link
                  v-for="m in menu"
                  :key="m.title"
                  tag="a"
                  class="dropdown-item"
                  :to="m.url"
                >{{ m.title }}</router-link>
                <a class="dropdown-item" href @click.prevent="logout">Выйти</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Рассказы других', url: '/blog', class: '', exact: true },
        { title: '', url: '/nothing1', class: 'ml-3 disabled_link' },
        { title: 'Напиши', url: '/chat', class: 'font-weight-bold' },
        { title: 'или', url: '/nothing2', class: 'disabled_link' }
      ],
      menu: [
        { title: 'Сообщение', url: '/chat' },
        { title: 'Написать блог', url: '/create' },
        { title: 'Мои истории', url: '/my-blog' },
        { title: 'Настройки', url: '/profile' }
      ],
      image: localStorage.getItem('image')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    isUser () {
      return localStorage.getItem('role') === '3'
    },
    isImage () {
      return localStorage.getItem('image')
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}
</script>
