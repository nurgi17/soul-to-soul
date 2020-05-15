import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || ''
  },
  mutations: {
    auth_success (state, token, role) {
      state.status = 'success'
      state.token = token
      state.role = role
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.role = ''
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    async login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/auth/login', data: user, withCredentials: true, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const role = resp.data.user
            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common['Authorization'] = 'Bearer_' + token
            commit('auth_success', token, role)
            resolve(role)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            reject(err.response.data.message)
          })
      })
    },
    async register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/unauthorized/user', data: user, method: 'POST' })
          .then(resp => {
            resolve(resp.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        axios({ url: 'https://localhost:8080/api/v1/auth/logout', method: 'GET' })
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        // eslint-disable-next-line dot-notation
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
}
