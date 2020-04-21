import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    role: ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, role) {
      state.status = 'success'
      state.token = token
      state.role = role
    },
    auth_error (state) {
      state.status = 'error'
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
        commit('auth_request')
        axios({ url: 'http://localhost:8080/api/v1/auth/login', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const role = resp.data.user
            localStorage.setItem('token', token)
            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common['Authorization'] = 'Bearer_' + token
            commit('auth_success', token, role)
            resolve(role)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    async register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/user', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const role = resp.data.user
            localStorage.setItem('token', token)
            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common['Authorization'] = 'Bearer_' + token
            commit('auth_success', token, role)
            resolve(role)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    async logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        axios({ url: 'http://localhost:8080/api/v1/auth/logout', method: 'GET' })
        localStorage.removeItem('token')
        // eslint-disable-next-line dot-notation
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
}
