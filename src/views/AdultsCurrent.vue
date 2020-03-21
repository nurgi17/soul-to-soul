<template>
<div>
    <div class="main-header container-articles">
      <h1>Как готовиться к экзаменам</h1>
    </div>

    <div class="main-img">
      <img src="img/Articles/article_main_img.svg" alt="Article main img" />
      <p>автор рисунка @okalso</p>
    </div>

    <div class="container-articles">
      <div class="main-text">
        <p>
          Дорогой читатель, полагаю, что ты планируешь сдавать экзамен в
          ближайшем будущем. <br /><br />
          Эти советы помогут тебе выработать свою стратегию. Но я с огромной
          уверенностью могу тебе сказать, что мои MustHave в заданном порядке,
          увеличат твой балл на минимум 10 очков.
        </p>
        <div class="main-header-text">
          <h3>
            MustHave #1 — Бесплатный онлайн курс TOEFL® Test Preparation: The
            Insider’s Guide на edX.
          </h3>
          <p>
            Это очень полезная вещь, поможет тебе на 100 процентов. После
            прохождения курса:
          </p>
          <ul>
            <li>структура теста ясна, как чистый лист</li>
            <li>определены сильные и слабые стороны</li>
            <li>практика получена</li>
            <li>
              есть скидка на 20% на продукты ETS (пробные тесты, сам тест,
              книги)
            </li>
          </ul>
        </div>
        <div class="main-header-text">
          <h3>MustHave #2 — Практика</h3>
          <p>Для чтения:</p>
          <ul>
            <li class="mb-2">читать тексты формата TOEFL</li>
            <p>Для слушанья:</p>
            <li>
              слушать подкасты и радио на английском, чтобы слух привыкал,
              например BBC radio
            </li>
            <li>
              тренироваться, это ссылка-находка:
              http://www.english-test.net/toefl/listening/
            </li>
          </ul>
        </div>

        <div class="main-header-text">
          <h3>MustHave #3 — пройти пробный тест.</h3>
          <p>Для меня это был пинком под зад:)</p>
          <p>
            Помогает понять, как все будет во время теста, на какие кнопки
            нажимать, где что находится.
          </p>
          <p>
            Я сдала пробный тест за неделю до оригинала, поняла, что мне нужно
            подтянуть. И последнюю неделю тренировалась каждую свободную минуту.
          </p>
        </div>
      </div>

      <section id="you-are-not-alone-1" class="mb-3">
        <div class="buttons d-flex flex-wrap">
          <button class="btn btn-secondary">Экзамен</button>
          <button class="btn btn-secondary">Подготовка</button>
          <button class="btn btn-secondary">Английский</button>
        </div>
      </section>

      <div class="d-flex flex-row">
        <img src="img/Users/author_img_1.svg" alt="Author of this article" />
        <div class="article-author d-flex flex-column ml-4">
          <h3>АВТОР</h3>
          <p>Сапарбаева Мадина</p>
        </div>
      </div>
    </div>

    <div class="container">
      <hr />
      <div class="recomendation">
        <p>Больше на <span class="font-weight-bold">OLO</span></p>
        <div class="row">
          <div class="recom-articels d-block mx-auto">
            <a href="adults_article_current.html"
              ><img
                src="img/Articles/article_img_2.svg"
                width="345px"
                height="200px"
                alt="Article 4"
            /></a>
            <p>Меня не понимают, я хочу исчезнуть</p>
          </div>
          <div class="recom-articels d-block mx-auto">
            <a href="adults_article_current.html"
              ><img
                src="img/Articles/article_img_3.svg"
                width="345px"
                height="200px"
                alt="Article 4"
            /></a>
            <p>Унижают из-за внешности. Что со мной не так?!</p>
          </div>
          <div class="recom-articels d-block mx-auto">
            <a href="adults_article_current.html"
              ><img
                src="img/Articles/article_img_8.svg"
                width="345px"
                height="200px"
                alt="Article 4"
            /></a>
            <p>Путь с ведьмы до принцессы или о том как издевались мальчики</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
</div>
</template>
<script>
import Footer from '@/components/app/Footer.vue'
export default {
  components: { Footer }
}
</script>
