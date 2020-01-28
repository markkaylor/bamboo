import UserService from '@/services/UserService.js'
import axios from 'axios'

export const state = {
  users: [],
  user: {},
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
  }
}

export const actions = {
  createUser({ commit }, user) {
    return UserService.postUser(user).then(() => {
      commit('ADD_USER', user)
      commit('SET_USER', user)
    })
  },
  signInUser({ commit }, user) {
    return UserService.authUser(user).then(() => {
      commit('SET_USER', user)
    })
  }
}

export const getters = {
  signedIn(state) {
    return !!state.user
  }
}