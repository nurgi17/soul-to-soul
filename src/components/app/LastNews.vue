<template>
    <div class="body row">
          <div class="ver-article d-block mx-auto">
            <div class="article1 d-flex flex-row">
              <!-- https://drive.google.com/uc?id=1AVRjx9TZrgnCg3Fo0SHcyGpAbuPTmz01
              width="255px"
              height="368px" -->
              <img
                src="img/Articles/article_img_1.svg"
                alt="Article 1"
              />
              <div class="ver-body">
                <h4>В связи болезнью</h4>
                <p>
                  Все больше выходят новости о китайском коронавирусе, которые
                  делает каждый день тревожнее. <br /><br />
                  Главное в этой ситуации, заботится о своем здоровье и близких.
                  Каждый день мыть руки, лицо. Избегать общественные места и
                  стараться питаться из дома.
                </p>
                <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
              </div>
            </div>
          </div>
          <div class="hr-articles d-block mx-auto">
            <div class="article1 d-flex flex-row">
              <!-- https://drive.google.com/uc?id=1VhMytCvfDpr1MGtJyoJEOQcsiLm-xjXY
              width="255px"
              height="166px" -->
              <img
                src="img/Articles/article_img_2.svg"
                alt="Article 2"
              />
              <div class="hor-body">
                <h6>Меня не понимают</h6>
                <p>Даже родители меня не слушают о чем я говорю.</p>
                <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
              </div>
            </div>
            <div class="article1 d-flex flex-row">
              <!-- https://drive.google.com/uc?id=1fQlLJWbE99bwbFAGh4uBiANyltAm1lYz
              width="255px"
              height="188px" -->
              <img
                src="img/Articles/article_img_3.svg"
                alt="Article 3"
              />
              <div class="hor-body">
                <h6>Унижают из-за внешности. Что со мной не так?!</h6>
                <p>В школе и на улице избегают меня словно я урод из цирка.</p>
                <router-link tag="a" to="/adults-articles-current" class="green-link">Читать дальше</router-link>
              </div>
            </div>
          </div>
        </div>
</template>
