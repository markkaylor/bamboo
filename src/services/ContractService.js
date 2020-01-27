import ApiClient from '@/services/ApiClient.js'

export default {
  getContracts() {
    return ApiClient.get('/contract')
  },
  getContract(id) {
    return ApiClient.get('/contracts/' + id)
  },
  postContract(contract) {
    return ApiClient.post('/contracts', contract)
  }
}