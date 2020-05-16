import axios from 'axios'
import fb from 'firebase'

export default {
  actions: {
    async createArticle ({ commit }, article) {
      let imageSrc = null
      const image = article.image
      delete article.image
      delete article.status
      if (image !== null) {
        try {
          const fileData = await fb.storage().ref('Article/Adults' + image.name).put(image)
          imageSrc = await fileData.ref.getDownloadURL() // img URL
        } catch (error) {
          commit('setError', error.message)
          console.log(error)
          throw error
        }
      }
      return new Promise((resolve, reject) => {
        axios({ url: 'https://localhost:8080/api/v1/admin/article', data: article, method: 'POST' })
          .then(res => {
            if (image !== null) {
              const newImageBlog = {
                url: imageSrc
              }
              axios({ url: 'https://localhost:8080/api/v1/admin/imageArticle/' + res.data.id, data: newImageBlog, method: 'POST' })
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
    }
  }
}
