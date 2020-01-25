<template>
  <h1>{{ product.name }}</h1>
</template>

<script>
import ProductService from '@/services/ProductService.js'

export default {
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      product: {}
    }
  },
  created() {
    ProductService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.log('woah there was an error ' + error)
      })
  }
}
</script>