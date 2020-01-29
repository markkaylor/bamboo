<template>
  <div 
    v-if="product.coverage.length"
    class="mb-1"
  >
    <p class="mb-0 font-weight-bold">Coverage Available:</p>
    <v-chip
      v-for="item in product.coverage"
      :key="item"
      class="ma-1 align-self-end"
      small
    >
      {{ item }}
    </v-chip>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

