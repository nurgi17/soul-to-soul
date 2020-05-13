<template>
  <div class="container">
    <Loader :loading="loading" v-if="loading"/>
    <section id="blog-users" class="mb-5 pb-5"> <!--v-else-->
      <h3>Ваши истории</h3>
      <div class="navs">
        <a href="" class="mr-3" :class="{'active-navs': !yes, 'disabled_link': !yes}" @click.prevent="yes=!yes">Черновики 1</a>
        <a href="" :class="{'active-navs': yes, 'disabled_link': yes}" @click.prevent="yes=!yes">Публикованные</a>
      </div>
      <hr />
      <div v-if="draft.length===0" :class="{close: yes}">У вас пока что нету никаких работ</div>
      <div v-else v-for="d in draft" :key="d.id" class="my-blog" :class="{close: yes}">
        <h4>{{ d.title }}</h4>
        <p>{{ d.short_content }}</p>
        <div class="dropdown">
          <div class="d-block mx-auto">
            <span>{{ d.date }} дней назад изменено</span>
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
              <router-link class="dropdown-item" tag="a" to="/create">Просмотр</router-link>
              <router-link class="dropdown-item" tag="a" to="/create">Редактировать</router-link>
              <a class="dropdown-item" href="" @click.prevent="deleteBlog(d.id)">Удалить</a>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div v-if="published.length===0" :class="{close: !yes}">У вас пока что нету опубликованных работ</div>
      <div v-for="p in published" :key="p.id" class="my-blog" :class="{close: !yes}">
        <h4>{{ p.title }}</h4>
        <p>{{ p.short_content }}</p>
        <div class="dropdown">
          <div class="d-block mx-auto">
            <span v-if="p.status==='CREATED'" class="yellow">На проверке</span>
            <span v-else-if="p.status==='ACCEPTED'" class="green">Опубликовано</span>
            <span v-else class="red">Отказано</span>
            <a
              v-if="p.status==='DENIED'"
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
              <router-link class="dropdown-item" tag="a" to="/adults-articles-current">Просмотр</router-link>
              <router-link class="dropdown-item" tag="a" to="/create">Редактировать</router-link>
              <a class="dropdown-item" href="" @click.prevent="deleteBlog(p.id)">Удалить</a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
    <!-- <h1 style="color: white;">Hey</h1> -->
  </div>
</template>
<script>
import messages from '@/utils/messages'
export default {
  data: () => ({
    yes: false,
    draft: [
      {
        id: 58,
        title: 'Новая история',
        short_content: 'С самого начала, жизнь требовала от меня',
        date: 13,
        status: 'DRAFT'
      }
    ],
    published: [
      {
        id: 2,
        title: 'Новая история 1',
        short_content: 'С самого начала',
        date: 15,
        status: 'CREATED'
      }
    ],
    loading: false
  }),
  async mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
    // await this.$store.dispatch('fetchUserBlogs')
    //   .then(res => {
    //     this.draft = Object.values(res).filter(function (r) {
    //       return r.status === 'DRAFT'
    //     })
    //     this.published = Object.values(res).filter(function (r) {
    //       return r.status === 'CREATED' || r.status === 'ACCEPTED' || 'DENIED'
    //     })
    //   })
    //   .catch(err => {
    //     this.loading = false
    //     this.$error(err || 'Что-то пошло не так')
    //   })
  },
  methods: {
    async deleteBlog (id) {
      this.loading = true
      await this.$store.dispatch('deleteBlog', id)
        .then(res => {
          this.loading = false
          var removeIndex = this.draft.map(function (item) { return item.id })
            .indexOf(id)
          ~removeIndex && this.draft.splice(removeIndex, 1)
          this.$message(messages.deletedBlog)
        })
        .catch(err => {
          this.loading = false
          this.$error(err || 'Что-то пошло не так')
        })
    }
  }
}
</script>
