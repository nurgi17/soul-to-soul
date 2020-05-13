import axios from 'axios'
import fb from 'firebase'
export default {
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async createBlog ({ commit }, newBlog) {
      let imageSrc = null
      let fid = null
      const image = newBlog.image
      delete newBlog.image
      if (image !== null) {
        try {
          const newCol = {
            title: newBlog.title
          }
          const column = await fb.database().ref('images').push(newCol) // column.key firebase_id
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`uploads/${column.key}.${imageExt}`).put(image)
          imageSrc = await fileData.ref.getDownloadURL() // img URL
          await fb.database().ref('images').child(column.key).update({
            imageSrc
          })
          fid = column.key
        } catch (error) {
          commit('setError', error.message)
          console.log(error)
          throw error
        }
      }
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/user/blog/', data: newBlog, method: 'POST' })
          .then(res => {
            if (image !== null) {
              const newImageBlog = {
                url: imageSrc,
                firebaseId: fid,
                blog_id: res.data.id
              }
              axios({ url: 'http://localhost:8080/api/v1/user/imageBlog', data: newImageBlog, method: 'POST' })
                .then(res => {
                  resolve(res)
                })
                .catch(err => {
                  commit('setError', err.response.data.message)
                  reject(err.response.data.message)
                })
            } else {
              resolve(res)
            }
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async fetchBlogById ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/unauthorized/blog/' + id, method: 'GET' })
          .then(res => {
            resolve(res.json())
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async fetchUserBlogs ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/user/userblogs', method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async deleteBlog ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:8080/api/v1/user/blog/' + id, method: 'DELETE' })
          .then(res => {
            resolve(res.status)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    }
  }
}
