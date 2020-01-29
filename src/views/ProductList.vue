<template>
  <v-container 
    v-if="product.products"
  >
    <h1>Available Products</h1>
    <v-row>
      <v-col
        v-for="(product, index) in product.products" 
        :key="product.id"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <product-card 
          :product="product" 
          :color="index % 2 ? 'green lighten-2' : 'blue lighten-2'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapState(['product'])
  },
  components: {
    ProductCard
  }, 
}
</script>