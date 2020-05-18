<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/moderator" tag="a">
      <b-img-lazy
        class="d-inline-block align-top"
        src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Moderator%2Flogo-min.jpg?alt=media&token=6d98d17d-7805-482d-8b3a-0a01f17a9bed"
        width="76"
        height="62"
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
    <div class="collapse navbar-collapse mt-3" id="navbarText">
      <ul class="navbar-nav ml-auto smooth-scroll">
        <li class="nav-item mt-1 search">
          <a class="m-nav-link" href="#" @click="search = !search" :class="{close : search}">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsearch.svg?alt=media&token=8da16a8b-e640-4c72-a920-9f0b9f95eaf2"
              alt="Search icon"
            ></b-img-lazy>
          </a>
          <div class="input-group mb-3" :class="{close: !search}">
            <div class="input-group-prepend first-icon">
              <span class="input-group-text">
                <a href class>
                  <b-img-lazy
                    src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fsearch.svg?alt=media&token=8da16a8b-e640-4c72-a920-9f0b9f95eaf2"
                    alt="Search icon"
                  ></b-img-lazy>
                </a>
              </span>
            </div>
            <input
              type="text"
              class="form-control shadow-none"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
        </li>
        <li class="nav-item mr-5 ml-4 pl-2 notification">
          <div class="d-flex flex-column align-items-center">
            <span class="dot"></span>
            <a
              class="m-nav-link"
              href
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b-img-lazy
                src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Icons%2Fnotification.svg?alt=media&token=9b73a6f6-a2a4-468e-ae64-a1fb3cf8e9a0"
                alt="Notification icon"
              ></b-img-lazy>
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item grey" href="#">Уведомление</a>
              <a class="dropdown-item blue" href="#">+1 собеседник</a>
              <a class="dropdown-item blue" href="#">+1 блог</a>
            </div>
          </div>
        </li>
        <li class="nav-item mr-5 pr-5 notification">
          <div class="d-flex flex-column align-items-center">
            <a
              class="m-nav-link"
              href
              id="userLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b-img-lazy
                :src="image"
                alt="Profile img"
                width="40px"
                height="40px"
                style="border-radius: 50%;"
              ></b-img-lazy>
            </a>
            <div class="dropdown-menu" aria-labelledby="userLink">
              <a class="dropdown-item grey" href="#">Модератор</a>
              <router-link class="dropdown-item blue" tag="a" to="/moderator-profile">Настройки</router-link>
              <a class="dropdown-item blue" href @click.prevent="logout">Выйти</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    search: false,
    image: localStorage.getItem('image')
  }),
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}
</script>
