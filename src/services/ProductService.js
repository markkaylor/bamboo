import ApiClient from '@/services/ApiClient.js'    

export default {
  getProducts() {
    return ApiClient.get('/products')
  },
  getProduct(id) {
    return ApiClient.get('/products/' + id)
  },
  postProduct(product) {
    return ApiClient.post('/products', product)
  }
}