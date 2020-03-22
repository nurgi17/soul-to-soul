<template>
  <div class="container">
    <section id="blog-users">
      <h3>Ваши истории</h3>
      <div class="navs">
        <a href="" class="mr-3" :class="{'active-navs': !yes, 'disabled_link': !yes}" @click.prevent="yes=!yes">Черновики 1</a>
        <a href="" :class="{'active-navs': yes, 'disabled_link': yes}" @click.prevent="yes=!yes">Публикованные</a>
      </div>
      <hr />
      <div class="my-blog" :class="{close: yes}">
        <h4>Новая история</h4>
        <p>С самого начала, жизнь требовала от меня</p>
        <div class="dropdown">
          <div class="d-block mx-auto">
            <span>13 дней назад изменено</span>
            <a
              href="#"
              class="ml-2"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link class="dropdown-item" tag="a" to="/create">Редактировать</router-link>
              <a class="dropdown-item" href="#">Удалить</a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
    <h1 style="color: white;">Hey</h1>
  </div>
</template>
<script>
export default {
  data: () => ({
    yes: false
  })
}
</script>
