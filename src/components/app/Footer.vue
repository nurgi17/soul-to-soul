<template>
  <div>
    <footer>
      <div class="d-flex flex-wrap">
        <div class="smth d-flex flex-wrap align-items-center">
          <router-link class="mr-4" to="/" tag="a">
            <b-img-lazy
              src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Flogo.svg?alt=media&token=8c31a302-87fc-4487-8ddb-6fec2fb884ad"
              width="54.28"
              height="47"
              alt="Logo of SoulToSoul"
            ></b-img-lazy>
          </router-link>
          <p class="mr-4 mt-3">© SoulToSoul 2020</p>
          <router-link to="/login" class="green-link">Войти</router-link>
        </div>
        <div class="right d-flex flex-wrap ml-auto align-items-center">
          <router-link class="green-link mr-4" to="/chat" tag="a">Напишите</router-link>
          <p class="mr-4 mt-3">или</p>
          <a href="tel:87026525298" class="green-link">Позвоните нам</a>
        </div>
      </div>
    </footer>
  </div>
</template>
