<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand">
        <!-- https://drive.google.com/uc?id=12e7L_velqJiJwSDZzEq19PrmIEew1lbB -->
        <img
          src="../../../public/img/Main/logo.svg"
          width="76"
          height="62"
          class="d-inline-block align-top"
          alt="Logo of SoulToSoul"
        />
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
          <li class="nav-item profile">
              <a
                href=""
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="text-decoration-none"
              >
                <img src="img/Users/profile.svg" alt="Profile img" />
                <span>Мой профиль</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <router-link
                v-for="m in menu"
                :key="m.title"
                tag="a"
                class="dropdown-item"
                :to="m.url">{{ m.title }}</router-link>
              </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
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
      { title: 'Настройки', url: '/profile' },
      { title: 'Выйти', url: '/login' }
    ]
  })
}
</script>
