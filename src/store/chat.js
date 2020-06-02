import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
export default {
  state: {
    messages: [],
    interculators: [],
    connected: false,
    fromUser: localStorage.getItem('username') || null,
    toUser: null,
    subscription: null
  },
  mutations: {
    newMessage (state, message) {
      state.messages.push(message)
    },
    clearMessages (state) {
      state.messages = []
    },
    newConnection (state, yes) {
      state.connected = yes
    },
    clearChat (state) {
      state.messages = []
      state.connected = false
      state.toUser = null
      state.interculators = []
      state.subscription = null
    },
    setFromUser (state, username) {
      state.fromUser = username
    },
    clearFromUser (state) {
      state.fromUser = null
    },
    setToUser (state, username) {
      state.toUser = username
    },
    setInterculators (state, interculators) {
      state.interculators = interculators
    },
    setSubscription (state, subs) {
      state.subscription = subs
    }
  },
  getters: {
    messages: s => s.messages,
    connected: s => s.connected,
    fromUser: s => s.fromUser,
    toUser: s => s.toUser,
    interculators: s => s.interculators,
    subs: s => s.subscription
  },
  actions: {
    connect ({ commit }, users) {
      return new Promise((resolve, reject) => {
        this.socket = new SockJS('https://soul-to-soul.herokuapp.com/chat')
        this.stompClient = Stomp.over(this.socket)
        this.stompClient.connect(
          {},
          frame => {
            commit('newConnection', true)
            let json = null
            if (users.fromUser === null || users.toUser === null) {
              this.stompClient.subscribe(`/topic/messages/${users.fromUser}/${users.toUser}`, tick => {
                this.stompClient.unsubscribe(tick.headers.subscription)
                json = JSON.parse(tick.body)
                users.fromUser = json.fromUser
                users.toUser = json.toUser
                commit('setFromUser', json.fromUser)
                commit('setToUser', json.toUser)
              })
            }
            setTimeout(() => {
              this.stompClient.subscribe(`/topic/messages/${users.fromUser}/${users.toUser}`, tick => {
                json = JSON.parse(tick.body)
                if (json.messages.length !== 0) {
                  if (Array.isArray(json.messages)) {
                    json.messages.forEach((m) => {
                      commit('newMessage', m)
                    })
                  } else if (typeof json.messages === 'object') {
                    commit('newMessage', json.messages)
                  }
                }
                resolve(json)
              })
            }, 1000)
          },
          err => {
            commit('setError', err.response.data.message)
            commit('newConnection', false)
            reject(err.response.data.message)
          }
        )
      })
    },
    connectModerator ({ commit }, fromUser) {
      return new Promise((resolve, reject) => {
        this.socket = new SockJS('https://soul-to-soul.herokuapp.com/chat')
        this.stompClient = Stomp.over(this.socket)
        this.stompClient.connect(
          {},
          frame => {
            commit('newConnection', true)
            this.stompClient.subscribe(`/topic/interculators/${fromUser}`, tick => {
              commit('setInterculators', JSON.parse(tick.body))
              resolve(tick)
            })
          },
          err => {
            commit('setError', err.response.data.message)
            commit('newConnection', false)
            reject(err.response.data.message)
          }
        )
      })
    },
    selectedUser ({ commit }, users) {
      return new Promise((resolve, reject) => {
        try {
          if (this.stompClient && this.stompClient.connected) {
            if (users.subs !== null) {
              this.stompClient.unsubscribe(users.subs)
            }
            setTimeout(() => {
              this.stompClient.subscribe(`/topic/messages/${users.fromUser}/${users.toUser}`, tick => {
                const json = JSON.parse(tick.body)
                commit('setSubscription', tick.headers.subscription)
                if (Array.isArray(json.messages)) {
                  json.messages.forEach((m) => {
                    commit('newMessage', m)
                  })
                } else if (typeof json.messages === 'object') {
                  commit('newMessage', json.messages)
                }
                resolve(tick)
              })
            }, 1000)
          }
        } catch (err) {
          commit('setError', err.response.data.message)
          commit('newConnection', false)
          reject(err.response.data.message)
        }
      })
    },
    sendNewMessage ({ commit }, inMessage) {
      const toUser = inMessage.toUser
      delete inMessage.toUser
      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send(`/app/chat/${toUser}`, JSON.stringify(inMessage), {})
      }
    },
    disconnect ({ commit }) {
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
      commit('clearChat')
    }
  }
}
