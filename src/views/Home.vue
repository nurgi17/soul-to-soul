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
          <!-- https://drive.google.com/uc?id=1nQ1PuRFqtzKTJYAealiiDrBN778WhQPu -->
          <img :src="card.img" :alt="card.alt" />
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
      <LastNews />
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
        img: 'img/Main/kids.svg',
        alt: 'Kids',
        url: '/kids-choose'
      },
      {
        title: 'Подростки',
        text: '11-17 лет',
        img: 'img/Main/teenagers.svg',
        alt: 'Teenagers',
        url: '/adults-articles'
      },
      {
        title: 'Молодые люди',
        text: '18-29 лет',
        img: 'img/Main/young_peoples.svg',
        alt: 'Young people',
        url: '/adults-articles'
      },
      {
        title: 'Взрослые',
        text: '30+ лет',
        img: 'img/Main/adults.svg',
        alt: 'Adults',
        url: '/adults-articles'
      }
    ]
  }),
  components: {
    Footer,
    Buttons,
    LastNews
  }
}
</script>
