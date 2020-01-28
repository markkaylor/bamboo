import UserService from '@/services/UserService.js'
import axios from 'axios'

export const state = {
  users: [],
  user: null,
}

export const mutations = {
  ADD_USER(state, user) {
    state.users.push(user)
  },
  SET_USER(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      user.token
    }`
  },
}

export const actions = {
  createUser({ commit }, user) {
    return UserService.postUser(user).then(() => {
      commit('ADD_USER', user)
      commit('SET_USER', user)
    })
  },
  signInUser({ commit }, currentUser) {
    return UserService.authUser(currentUser).then(() => {
      UserService.getUsers().then(response => {
        const user = response.data.find(user => user.email === currentUser.email)
        commit('SET_USER', user)
      })
    })
  }
}

export const getters = {
  signedIn(state) {
    return !!state.user
  }
}