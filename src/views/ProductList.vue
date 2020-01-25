<template>
  <div>
    <h1>Product List</h1>
      <product-card 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ProductService from '@/services/ProductService.js'

export default {
  components: {
    ProductCard
  }, 
  data() {
    return {
      products: [],
    }
  },
  created() {
    ProductService.getProducts()
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        console.log('there was an error ' + error.response)
      })
  }
}
</script>