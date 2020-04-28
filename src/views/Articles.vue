<template>
  <div class="container">
    <section id="some-things-which-can-help-you">
      <div class="choosing d-flex flex-row justify-content-center">
        <div class="choosing-img d-flex flex-column">
          <img src="img/Kids/cloud_1.svg" alt="Cloud of think" />
          <img src="img/Kids/sadly.svg" alt="Sadly feel" />
        </div>
        <div class="choosing-title">
          <p>Вот некоторые вещи, которые могут тебе помочь!</p>
          <router-link class="green-link" tag="a" to="/kids-choose">Поменять</router-link>
        </div>
      </div>
      <Histories/>
      <Loader/>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/app/Footer.vue'
import Histories from '@/components/app/Histories.vue'
export default {
  name: 'kids-articles',
  components: { Footer, Histories }
}
</script>
