import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import articles from './articles'
import blogs from './blogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    uploadedImage: {}
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    },
    setUploadedImage (state, payload) {
      state.uploadedImage = payload
    }
  },
  actions: {
  },
  getters: {
    err: s => s.error,
    uplImg: s => s.uploadedImage
  },
  modules: {
    auth,
    articles,
    blogs
  }
})
