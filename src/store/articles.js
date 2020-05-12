import axios from 'axios'

export default {
  state: {
    mood: 0,
    problem: 0
  },
  mutations: {
    setMood (state, m) {
      state.mood = m
    },
    setProblem (state, p) {
      state.problem = p
    }
  },
  getters: {
    mood: m => m.mood,
    problem: p => p.problem
  },
  actions: {
    async fetchLastNews ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/lastArticles', method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchArticleByCategory ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: `http://localhost:8080/api/v1/unauthorized/articles/category/${id}`, method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchArticleById ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: `http://localhost:8080/api/v1/unauthorized/article/${id}`, method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    }
    // async fetchArticles ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     axios({ url: 'http://localhost:8080/api/v1/unauthorized/articles', method: 'GET' })
    //       .then(res => {
    //         resolve(res.json())
    //       })
    //       .catch(err => {
    //         commit('setError', err.response.data.message)
    //         reject(err)
    //       })
    //   })
    // },
    // async fetchArticleByProblem ({ commit }, id) {
    //   return new Promise((resolve, reject) => {
    //     axios({ url: 'http://localhost:8080/api/v1/unauthorized/articlebyproblem', data: id, method: 'POST' })
    //       .then(res => {
    //         resolve(res.json())
    //       })
    //       .catch(err => {
    //         commit('setError', err)
    //         console.log(err)
    //       })
    //   })
    // },
    // async fetchArticleByMoodAndProblem ({ commit }, ids) {
    //   return new Promise((resolve, reject) => {
    //     axios({ url: `http://localhost:8080/api/v1/unauthorized/articles/category/${ids.category}/mood/${ids.mood}/problem/${ids.problem}`, method: 'GET' })
    //       .then(res => {
    //         resolve(res.data)
    //       })
    //       .catch(err => {
    //         commit('setError', err.response.data.message)
    //         reject(err)
    //       })
    //   })
    // }
  }
}
