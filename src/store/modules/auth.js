import { SET_USER, SET_TOKEN } from '@/store/mutationTypes'
import firebase from 'firebase/app'
import 'firebase/auth'

const state = () => ({
  user: null,
  token: null
})

const getters = {
  userUid: (state) => {
    return state.user?.uid || null
  }
}

const actions = {
  async registerAuthGoogleProvider ({ commit }, payload) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential

        var token = credential.accessToken
        var user = result.user
        commit(SET_USER, { user })
        commit(SET_TOKEN, { token })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async fetchUser ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user)

        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid
          commit(SET_USER, { user })
          resolve({ user })

        // ...
        } else {
        // User is signed out
        // ...
        }
      })
    })
  },
  async logout ({ commit }, payload) {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)

      // An error happened.
    })
  }
}

const mutations = {
  [SET_USER] (state, { user }) {
    state.user = user
  },
  [SET_TOKEN] (state, { token }) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
