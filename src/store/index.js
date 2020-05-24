import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import articles from './articles'
import blogs from './blogs'
import admin from './admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    messages: []
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    },
    newMessage (state, message) {
      state.messages.push(message)
    }
  },
  actions: {
  },
  getters: {
    err: s => s.error,
    messages: s => s.messages
  },
  modules: {
    auth,
    articles,
    blogs,
    admin
  }
})
