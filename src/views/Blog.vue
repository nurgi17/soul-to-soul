<template>
  <div class="container">
    <section id="stories-from-people-like-you">
      <div class="flexible-content d-flex flex-row justify-content-between align-items-center">
        <div class="blog-header d-flex flex-column align-self-end">
          <h1>Рассказы таких людей как ты</h1>
          <p>
            Почитай как другие проходят разные ситуации.
            Ты можешь и свой путь написать
          </p>
          <a href="blog_create.html" class="green-link">Поделиться своей историей</a>
        </div>
        <img src="img/Blog/sad_woman.svg" alt="Sadly woman" />
      </div>
    </section>

    <section id="you-are-not-alone-1">
      <Buttons/>
    </section>

    <section id="adults-articles">
      <div class="row">
        <Articles/>
      </div>
    </section>
    <img src="img/Main/loader.svg" class="mt-5 mb-5 d-block mx-auto" alt="Loader" />
    <section id="stories-from-people-like-you">
      <div class="flexible-content d-flex flex-row justify-content-between align-items-center">
        <div class="blog-header d-flex flex-column align-self-end">
          <h4>Есть своя история?</h4>
          <p>Поделись с другими и спасешь жизнь ближнему.</p>
          <button class="btn btn-secondary">Вперед</button>
        </div>
        <img src="img/Blog/message.svg" alt="Message icon" />
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Buttons from '@/components/app/Buttons.vue'
import Footer from '@/components/app/Footer.vue'
import Articles from '@/components/app/Articles.vue'
export default {
  components: {
    Buttons, Footer, Articles
  }
}
</script>
