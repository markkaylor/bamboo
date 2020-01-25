<template>
  <v-card width="600">
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.description }}</v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        product: {
          name: 'Iphone',
          description: 'Insure youe iphone for the holiday weekend'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>