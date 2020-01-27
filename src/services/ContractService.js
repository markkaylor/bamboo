import ApiClient from '@/services/ApiClient.js'

export default {
  postContract(contract) {
    return ApiClient.post('/contracts', contract)
  }
}