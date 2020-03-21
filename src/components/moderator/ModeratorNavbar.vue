<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/moderator" tag="a">
      <!-- https://drive.google.com/uc?id=12e7L_velqJiJwSDZzEq19PrmIEew1lbB -->
      <img
        class="d-inline-block align-top"
        src="img/Moderator/logo.svg"
        width="76"
        height="62"
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
    <div class="collapse navbar-collapse mt-3" id="navbarText">
      <ul class="navbar-nav ml-auto smooth-scroll">
        <li class="nav-item mt-1 search">
          <a class="m-nav-link" href="#" @click="search = !search" :class="{close : search}">
            <img src="img/Icons/search.svg" alt="Search icon" />
          </a>
          <div class="input-group mb-3" :class="{close: !search}">
                  <div class="input-group-prepend first-icon">
                    <span class="input-group-text"
                      ><a href="" class=""
                        ><img src="img/Icons/search.svg" alt="Search icon"/></a
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control shadow-none"
                    aria-label="Amount (to the nearest dollar)"
                  />
          </div>
        </li>
        <li class="nav-item mr-4 ml-4 pl-2 notification">
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
              <img src="img/Icons/notification.svg" alt="Notification icon" />
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item grey" href="#">Уведомление</a>
              <a class="dropdown-item blue" href="#">+1 собеседник</a>
              <a class="dropdown-item blue" href="#">+1 блог</a>
            </div>
          </div>
        </li>
        <li class="nav-item mr-5 pr-5">
          <router-link tag="a" to="">
            <img src="img/Users/profile.svg" alt="Profile img" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    search: false
  })
}
</script>
