<template>
  <div>
    <h1>Product List</h1>
    <router-link :to="{name: 'product-show', params: {id: '1'}}">
      <product-card />
    </router-link>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  }
}
</script>