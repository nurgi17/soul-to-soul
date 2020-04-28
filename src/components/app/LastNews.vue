<template>
  <div class="body row">

    <div class="ver-article d-block mx-auto">
      <div class="article1 d-flex flex-row">
        <img src="img/Articles/article_img_1.svg" alt="Article 1" /> <!--news[0].img-->
        <div class="ver-body">
          <h4>
            <!-- {{ news[0].title }} -->
            В связи болезнью
          </h4>
          <p>
            <!-- {{ news[0].content }} -->
            Все больше выходят новости о китайском коронавирусе, которые
            делает каждый день тревожнее.
            <br />
            <br />Главное в этой ситуации, заботится о своем здоровье и близких.
            Каждый день мыть руки, лицо. Избегать общественные места и
            стараться питаться из дома.
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>
    </div>

    <div class="hr-articles d-block mx-auto">

      <div class="article1 d-flex flex-row">
        <img src="img/Articles/article_img_2.svg" alt="Article 2" /> <!--news[1].img-->
        <div class="hor-body">
          <h6>
            <!-- {{ news[1].title }} -->
            Меня не понимают
          </h6>
          <p>
            <!-- {{ news[1].content }} -->
            Даже родители меня не слушают о чем я говорю.
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

      <div class="article1 d-flex flex-row">
        <img src="img/Articles/article_img_3.svg" alt="Article 3" /> <!--news[2].img-->
        <div class="hor-body">
          <h6>
            <!-- {{ news[2].title }} -->
            Унижают из-за внешности. Что со мной не так?!
          </h6>
          <p>
            <!-- {{ news[2].content }} -->
            В школе и на улице избегают меня словно я урод из цирка.
          </p>
          <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'last-three-articles'
  // props: ['news']
}
</script>
