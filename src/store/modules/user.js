import UserService from '@/services/UserService.js'

export const state = {
  users: [],
  user: {},
}

export const mutations = {
  ADD_USER(state, user) {
    state.users.push(user)
  }
}

export const actions = {
  createUser({ commit }, user) {
    return UserService.postUser(user).then(() => {
      commit('ADD_USER', user)
    })
  }
}