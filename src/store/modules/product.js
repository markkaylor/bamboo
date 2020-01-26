import ProductService from '@/services/ProductService.js'

export const state = {
  products: [],
  product: {},
}

export const mutations = {
  /**
   * 
   * @param {*} state 
   * @param {*} product 
   * 
   * Set product state to payload of newly created product
   */
  ADD_PRODUCT(state, product) {
    state.products.push(product)
  },
  /**
   * 
   * @param {*} state 
   * @param {*} products 
   * 
   * Set products state to payload of available products
   */
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  createProduct({ commit }, product) {
    return ProductService.postProduct(product).then(() => {
      commit('ADD_PRODUCT', product)
    })   
  },
  fetchProducts({ commit }) {
    ProductService.getProducts()
    .then(response => {
      commit('SET_PRODUCTS', response.data)
    })
    .catch(error => {
      console.log('there was an error ' + error.response)
    })
  },
  fetchProduct({ commit, getters }, id) {
    const product = getters.getProductById(id)
    // Check if the product is already in state
    if (product) {
      // If found set the product
      commit('SET_PRODUCT', product)
    } else {
      // Otherwise get it from the API
      ProductService.getProduct(id)
      .then(response => {
        commit('SET_PRODUCT', response.data)
      })
      .catch(error => {
        console.log('there was an error ' + error.response)
      })
    }
  }
}

export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id === id)
  }
}