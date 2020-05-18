<template>
  <div class="container">
    <header>
      <div id="header-message">
        <h1>Измени свою жизнь в один клик!</h1>
        <p>Жизнь проживается только один и нужно это провести с удовольствием.</p>
        <div class="d-flex flex-row justify-content-between">
          <router-link class="btn btn-success" to="/chat" tag="button">Напишите нам</router-link>
          <div class="align-self-center">или</div>
          <a class="btn btn-success" href="tel:87026525298">Позвоните</a>
        </div>
      </div>
    </header>
    <section id="who-are-you">
      <h4>Кто ты?</h4>
      <div class="row">
        <div class="card d-block mx-auto" v-for="card in cards" :key="card.title">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.text }}</p>
          </div>
          <b-img-lazy :src="card.img" :alt="card.alt"></b-img-lazy>
          <div>
            <router-link class="btn btn-primary" tag="a" :to="card.url">
              Перейти
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="you-are-not-alone">
      <div class="title">
        <h1>Ты не один</h1>
        <p>
          Если у тебя есть проблемы, мы тебе поможем. Даже если ты думаешь что
          это малейшие и не стоющие внимания ситуации.
        </p>
      </div>

      <Buttons />
      <Loader v-if="loading" />
      <LastNews v-else :news="news" />
    </section>

    <section id="how-to-use-our-service">
      <h1>Как пользоваться нашим сервисом</h1>
      <p>
        <span class="font-weight-bold mr-3">Вы можете</span>
        <a href="tel:87026525298" class="green-link mr26">позвонить</a>
        <span class="mr26">или</span>
        <router-link class="green-link" to="/chat" tag="a">написать</router-link>
      </p>
      <p>
        Все ваши данные останутся в безопасности и анонимными. (Ваши близкие
        не будут знать, если хотите)
      </p>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/app/Footer.vue'
import Buttons from '@/components/app/Buttons.vue'
import LastNews from '@/components/app/LastNews.vue'
export default {
  name: 'Home',
  data: () => ({
    cards: [
      {
        title: 'Дети',
        text: '3-10 лет',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Fkids-min.jpg?alt=media&token=3803a209-957d-45f0-a51e-e434781d6896',
        alt: 'Kids',
        url: '/kids-choose'
      },
      {
        title: 'Подростки',
        text: '11-17 лет',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Fteenagers-min.jpg?alt=media&token=75ff0fbf-2446-44bb-b286-4561334de578',
        alt: 'Teenagers',
        url: '/adults-articles'
      },
      {
        title: 'Молодые люди',
        text: '18-29 лет',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Fyoung_peoples-min.jpg?alt=media&token=a9da1358-0dd0-4d9c-96cf-19999ca6af91',
        alt: 'Young people',
        url: '/adults-articles'
      },
      {
        title: 'Взрослые',
        text: '30+ лет',
        img:
          'https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Fadults-min.jpg?alt=media&token=120e2da4-d62c-4661-9cb1-7361d0a05dc7',
        alt: 'Adults',
        url: '/adults-articles'
      }
    ],
    news: [],
    loading: true
  }),
  components: {
    Footer,
    Buttons,
    LastNews
  },
  async mounted () {
    await this.$store
      .dispatch('fetchLastNews')
      .then(res => {
        this.news = res
        this.loading = false
      })
      .catch(err => {
        this.$error(err || 'Что-то пошло не так')
      })
  }
}
</script>
