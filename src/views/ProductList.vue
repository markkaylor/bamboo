<template>
  <div v-if="product.products">
    <h1>Product List</h1>
      <product-card 
        v-for="product in product.products" 
        :key="product.id"
        :product="product"
      />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProductCard
  }, 
  created() {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>