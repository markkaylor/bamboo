<template>
  <router-link :to="{name: 'product-show', params: {id: product.id }}">
    <v-card width="800" class="mb-5">
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>
        Insure your {{ product.name }} for the holiday weekend
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
      }
    }
  }
</script>