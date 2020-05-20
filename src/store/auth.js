import axios from 'axios'
import fb from 'firebase'

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
            localStorage.setItem('image', resp.data.image)
            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common['Authorization'] = 'Bearer_' + token
            commit('auth_success', token, role)
            resolve(role)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('image')
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
        localStorage.removeItem('image')
        // eslint-disable-next-line dot-notation
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    async getUser ({ commit }) {
      let url = ''
      if (localStorage.getItem('role') === '2') {
        url = 'https://localhost:8080/api/v1/moderator/'
      } else if (localStorage.getItem('role') === '3') {
        url = 'https://localhost:8080/api/v1/user/'
      }
      return new Promise((resolve, reject) => {
        axios({ url: url, method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async updateUser ({ commit }, user) {
      delete user.id
      let url = ''
      if (localStorage.getItem('role') === '2') {
        url = 'https://localhost:8080/api/v1/moderator/'
      } else if (localStorage.getItem('role') === '3') {
        delete user.username
        url = 'https://localhost:8080/api/v1/user/'
      }
      if (user.updated.status === 1) {
        const fileData = await fb.storage().ref('Users/' + user.updated.image.name).put(user.updated.image)
        const imageSrc = await fileData.ref.getDownloadURL()
        if (user.firebaseId !== 'anon_user' && user.firebaseId !== 'moderator') {
          const image = fb.storage().refFromURL(user.imageUrl)
          image.delete()
        }
        localStorage.setItem('image', imageSrc)
        user.imageUrl = imageSrc
        user.firebaseId = 'image_uploaded'
      } else if (user.updated.status === 2) {
        user.firstName = user.updated.firstName
        user.lastName = user.updated.lastName
      } else if (user.updated.status === 3) {
        if (localStorage.getItem('role') === '2') {
          user.password = 'moderator123'
        } else if (localStorage.getItem('role') === '3') {
          user.password = 'user123'
        }
      }
      delete user.updated
      return new Promise((resolve, reject) => {
        axios({ url: url, data: user, method: 'PUT' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async feedbackAndComplaint ({ commit }, modal) {
      const feedback = {
        comment: modal.text,
        type: modal.id
      }
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/unauthorized/feedback', data: feedback, method: 'POST' })
          .then(resp => {
            resolve(resp.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async fetchFeedbackAndComplaint ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/admin/feedbacks', method: 'GET' })
          .then(resp => {
            resolve(resp.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    }
  }
}
