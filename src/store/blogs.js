import axios from 'axios'
export default {
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async fetchBlogById ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/blog/' + id, method: 'GET' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err)
          })
      })
    },
    async fetchBlogByTag ({ commit }, tag) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/blogbytag', data: tag, method: 'POST' })
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
