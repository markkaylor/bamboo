import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: '1', name: 'Mark' },
    products: [],
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    createProduct({ commit }, product) {
      return ProductService.postProduct(product).then(() => {
        commit('ADD_PRODUCT', product)
      })   
    }
  }
})