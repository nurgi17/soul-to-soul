<template>
  <div class="container">
    <Loader :loading="loading" v-if="loading"/>
    <section v-else id="blog-users" class="mb-5 pb-5">
      <h3>Ваши истории</h3>
      <div class="navs">
        <a href="" class="mr-3" :class="{'active-navs': !yes, 'disabled_link': !yes}" @click.prevent="yes=!yes">Черновики {{ Object.keys(draft).length }}</a>
        <a href="" :class="{'active-navs': yes, 'disabled_link': yes}" @click.prevent="yes=!yes">Публикованные {{ Object.keys(published).length }}</a>
      </div>
      <hr />
      <div v-if="Object.keys(draft).length===0" :class="{close: yes}">У вас пока что нету никаких работ</div>
      <div v-else v-for="d in draft" :key="d.id" class="my-blog" :class="{close: yes}">
        <h4>{{ d.title }}</h4>
        <p>{{ d.shortContent }}</p>
        <div class="dropdown">
          <div class="d-block mx-auto">
            <span>{{ d.createdDate }} дней назад изменено</span>
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
              <!-- <router-link class="dropdown-item" tag="a" to="/create">Просмотр</router-link> -->
              <router-link class="dropdown-item" tag="a" :to="{ path: '/update/' + d.id }">Редактировать</router-link>
              <a class="dropdown-item" href="" @click.prevent="deleteBlog(d.id, d.image.id, d.image.url, 1)">Удалить</a>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div v-if="Object.keys(published).length===0" :class="{close: !yes}">У вас пока что нету опубликованных работ</div>
      <div v-else v-for="p in published" :key="p.id" class="my-blog" :class="{close: !yes}">
        <h4>{{ p.title }}</h4>
        <p>{{ p.shortContent }}</p>
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
              <!-- <router-link class="dropdown-item" tag="a" to="/adults-articles-current">Просмотр</router-link> -->
              <router-link class="dropdown-item" tag="a" :to="{ path: '/update/' + p.id }">Редактировать</router-link>
              <a class="dropdown-item" href="" @click.prevent="deleteBlog(p.id, p.image.id, p.image.url, 2)">Удалить</a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  </div>
</template>
<script>
import messages from '@/utils/messages'
export default {
  data: () => ({
    yes: false,
    draft: {},
    published: {},
    loading: true
  }),
  async mounted () {
    await this.$store.dispatch('fetchUserBlogs')
      .then(res => {
        this.draft = Object.values(res).filter(function (r) {
          return r.status === 'DRAFT'
        })
        this.published = Object.values(res).filter(function (r) {
          return r.status === 'CREATED' || r.status === 'ACCEPTED' || r.status === 'DENIED'
        })
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        this.$error(err || 'Что-то пошло не так')
      })
  },
  methods: {
    async deleteBlog (id, imgId, imgUrl, part) {
      this.loading = true
      const ids = {
        id, imgId, imgUrl
      }
      await this.$store.dispatch('deleteBlog', ids)
        .then(res => {
          this.loading = false
          if (part === 1) {
            var removeIndex = this.draft.map(function (item) { return item.id })
              .indexOf(id)
            ~removeIndex && this.draft.splice(removeIndex, 1)
          } else if (part === 2) {
            var rIndex = this.published.map(function (item) { return item.id })
              .indexOf(id)
            ~rIndex && this.published.splice(rIndex, 1)
          }
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
