<template>
  <div>
    <section id="auth">
      <div class="auth-form container">
        <h3>Зарегистрироваться</h3>
        <form class="needs-validation" @submit.prevent="submitHandler">
          <div>
            <input
              id="email"
              type="text"
              v-model.trim="email"
              class="form-control"
              :class="{ 'is-invalid' : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
              placeholder="E-mail"
            />
            <small
              class="invalid-feedback"
              v-if="$v.email.$dirty && !$v.email.required"
            >Поля Email не должно быть пустым</small>
            <small
              class="invalid-feedback"
              v-else-if="$v.email.$dirty && !$v.email.email"
            >Введите кооректный Email</small>
          </div>
          <div>
            <input
              id="password"
              type="password"
              v-model.trim="password"
              class="form-control"
              :class="{ 'is-invalid' : ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
              placeholder="Пароль"
            />
            <small
              class="invalid-feedback"
              v-if="$v.password.$dirty && !$v.password.required"
            >Введите пароль</small>
            <small
              class="invalid-feedback"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов.</small>
          </div>
          <button class="btn btn-primary" type="submit">Зарегистрироваться</button>
        </form>
        <div class="other-auth d-flex flex-wrap justify-content-between align-items-center">
          <span>Регистрация через</span>
          <a class="google" href>
            <i class="fab fa-google-plus"></i>
          </a>
          <a class="vk" href>
            <i class="fab fa-vk"></i>
          </a>
          <a class="facebook" href>
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <footer>
        <div class="d-flex flex-wrap">
          <div class="smth1 d-flex flex-wrap align-items-center">
            <!-- https://drive.google.com/uc?id=12e7L_velqJiJwSDZzEq19PrmIEew1lbB -->
            <p class="mr-4 mt-3">Уже есть аккаунт?</p>
            <router-link to="/login" class="green-link">Войти</router-link>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push('/moderator')
      // try {
      //   await this.$store.dispatch('register', fomrData)
      //   this.$router.push('/')
      // } catch (e) {}
    }
  }
}
</script>
