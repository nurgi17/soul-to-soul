<template>
  <div class="container">
    <div class="row">
      <div class="sidebar col-sm-3">
        <div class="mb-4">
          <img src="img/Icons/complain.svg" alt="Complain button" />
          <a href class="ml-2">Пожаловаться</a>
        </div>
        <div>
          <img src="img/Icons/feedback.svg" alt="Feedback button" />
          <a href class="ml-2">Оставить отзыв</a>
        </div>
      </div>
      <div class="chat col-12 col-sm-9">
        <div class="input-group mb-3">
          <div class="input-group-prepend first-icon">
            <span class="input-group-text">
              <a href class>
                <img src="img/Icons/clip.svg" alt="Clip icon" />
              </a>
            </span>
          </div>
          <div class="input-group-prepend middle-icon">
            <span class="input-group-text">
              <a href class>
                <img src="img/Icons/smile.svg" alt="Smile icon" />
              </a>
            </span>
          </div>
          <input
            type="text"
            class="form-control shadow-none"
            aria-label="Amount (to the nearest dollar)"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <a href class="last-icon">
                <img src="img/Icons/user_send.svg" alt="Send button" />
              </a>
            </span>
          </div>
        </div>

        <div class="messages">
          <ul>
            <li class="sent">
              <p>
                <span>12:23</span> Какой-то текст
              </p>
            </li>
            <li class="sent">
              <p>
                <span>12:23</span> Какой-то текст
              </p>
            </li>
            <li class="reply">
              <p>
                Какой-то текст
                <span>12:23</span>
              </p>
            </li>
            <li class="reply">
              <p>
                Какой-то текст
                <span>12:23</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="modal-exit" hidden>
      <h4>Сохранить чат?</h4>
      <p>Зарегистрируйтесь и сохраните чат</p>
      <div class="d-flex flex-row justify-content-between">
        <a href class="save-chat">Зарегистрироваться</a>
        <a href class="leave-chat">Выйти с чата</a>
      </div>
    </div>

    <div class="complaint-feedback" hidden>
      <h4>Пожаловаться</h4>
      <textarea placeholder="Напишите сюда...."></textarea>
      <div class="d-flex flex-row justify-content-between">
        <a href class="cancel font-weight-bold">Отмена</a>
        <a href class="send font-weight-bold">Отправить</a>
      </div>
    </div>
  </div>
</template>
