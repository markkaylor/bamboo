import ContractService from '@/services/ContractService.js'

export const state = {
  contracts: [],
  contract: {}
}

export const mutations = {
  ADD_CONTRACT(state, contract) {
    state.contracts.push(contract)
  },

  SET_CONTRACT(state, contract) {
    state.contract = contract
  }, 
}

export const actions = {
  createContract({ commit }, contract) {
    return ContractService.postContract(contract).then(() => {
      commit('ADD_CONTRACT', contract)
    })
  }
}