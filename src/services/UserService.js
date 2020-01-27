import ApiClient from '@/services/ApiClient.js'

export default {
  postUser(user) {
    return ApiClient.post('/users', user)
  }
}