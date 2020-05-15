import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import articles from './articles'
import blogs from './blogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
  },
  getters: {
    err: s => s.error
  },
  modules: {
    auth,
    articles,
    blogs
  }
})
