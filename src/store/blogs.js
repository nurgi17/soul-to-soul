import axios from 'axios'
import fb from 'firebase'
export default {
  state: {
    blog: false
  },
  mutations: {
    setBlog (state, smth) {
      state.blog = smth
    }
  },
  getters: {
    isBlog: s => s.blog
  },
  actions: {
    async createBlog ({ commit }, newBlog) {
      let imageSrc = null
      const image = newBlog.image
      delete newBlog.image
      if (image !== null) {
        try {
          const fileData = await fb.storage().ref('uploads/' + image.name).put(image)
          imageSrc = await fileData.ref.getDownloadURL() // img URL
        } catch (error) {
          commit('setError', error.message)
          console.log(error)
          throw error
        }
      }
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/user/blog/', data: newBlog, method: 'POST' })
          .then(res => {
            if (image !== null) {
              const newImageBlog = {
                url: imageSrc,
                firebaseId: null
              }
              axios({ url: 'https://localhost:8080/api/v1/user/imageBlog/' + res.data.id, data: newImageBlog, method: 'POST' })
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
    async updateBlog ({ commit }, upBlog) {
      let blog = {}
      let url = ''
      if (localStorage.getItem('role') === '3') {
        url = 'https://localhost:8080/api/v1/user/blog/'
        blog = {
          content: upBlog.updated.content,
          title: upBlog.updated.title,
          shortContent: upBlog.updated.shortContent,
          status: upBlog.updated.status
        }
        if (upBlog.updated.image !== null) {
          const fileData = await fb.storage().ref('uploads/' + upBlog.updated.image.name).put(upBlog.updated.image)
          const imageSrc = await fileData.ref.getDownloadURL()
          const newImageBlog = {
            url: imageSrc,
            firebaseId: null,
            blogId: upBlog.id
          }
          if (upBlog.images[0].url !== '') {
            const image = fb.storage().refFromURL(upBlog.images[0].url)
            image.delete()
            axios({ url: 'https://localhost:8080/api/v1/user/imageBlog/' + upBlog.images[0].id, data: newImageBlog, method: 'PUT' })
              .catch(err => {
                commit('setError', err.response.data.message)
                return new Promise((resolve, reject) => {
                  reject(err)
                })
              })
          } else {
            axios({ url: 'https://localhost:8080/api/v1/user/imageBlog/' + upBlog.id, data: newImageBlog, method: 'POST' })
              .catch(err => {
                commit('setError', err.response.data.message)
                return new Promise((resolve, reject) => {
                  reject(err)
                })
              })
          }
        }
      } else if (localStorage.getItem('role') === '2') {
        url = 'https://localhost:8080/api/v1/moderator/blog/'
        blog = {
          content: upBlog.content,
          title: upBlog.title,
          shortContent: upBlog.shortContent,
          status: upBlog.status,
          comment: upBlog.comment
        }
      }
      return new Promise((resolve, reject) => {
        axios({ url: url + upBlog.id, data: blog, method: 'PUT' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async fetchBlogById ({ commit }, ids) {
      let url = ''
      if (ids.check === 2) {
        url = 'https://localhost:8080/api/v1/moderator/blog/'
      } else if (ids.check === 3) {
        url = 'https://localhost:8080/api/v1/user/blog/'
      } else if (ids.check === 1) {
        url = 'https://localhost:8080/api/v1/unauthorized/blog/'
      }
      return new Promise((resolve, reject) => {
        axios({ url: url + ids.id, method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            commit('setError', err.response.data.message)
            reject(err.response.data.message)
          })
      })
    },
    async fetchBlogs ({ commit }, check) {
      let url = ''
      if (check === 2) {
        url = 'https://localhost:8080/api/v1/moderator/blogs'
      } else if (check === 3) {
        url = 'https://localhost:8080/api/v1/user/userblogs'
      } else if (check === 1) {
        url = 'https://localhost:8080/api/v1/unauthorized/blogs'
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
    async deleteBlog ({ commit }, ids) {
      if (ids.imgUrl !== null) {
        const image = fb.storage().refFromURL(ids.imgUrl)
        image.delete()
        axios({ url: 'https://localhost:8080/api/v1/user/imageBlog/' + ids.imgId, method: 'DELETE' })
          .catch(err => {
            commit('setError', err.response.data.message)
            return new Promise((resolve, reject) => {
              reject(err)
            })
          })
      }
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/user/blog/' + ids.id, method: 'DELETE' })
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
