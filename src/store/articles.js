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
    }
  }
}
