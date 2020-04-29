import axios from 'axios'

export default {
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async fetchLastNews ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/lastnews', method: 'GET' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchArticles ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/articles', method: 'GET' })
          .then(res => {
            resolve(res.json)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchArticleById ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/article/' + id, method: 'GET' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchArticleByProblem ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/articlebyproblem', data: id, method: 'POST' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err)
            console.log(err)
          })
      })
    },
    async fetchArticleByMoodAndProblem ({ commit }, ids) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/findbymoodandproblem', data: ids, method: 'POST' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    }
  }
}
