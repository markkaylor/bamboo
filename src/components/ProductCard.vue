<template>
  <router-link :to="{name: 'product-show', params: {id: product.id }}">
    <v-card height="300" class="overflow">
      <v-card-text class="pa-0">
        <v-card-title 
          class="justify-center white--text pa-12 rounded"
          :class="color"
        >
          {{ product.name }}
        </v-card-title>
      </v-card-text>
      <v-card-text>
        {{ product.description }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
      },
      color: {
        type: String,
      }
    },
  }
</script>

<style scoped>
.rounded {
  border-radius: 4px 4px 0 0;
}

.overflow {
  word-break: break-all;
    overflow: hidden;
  text-overflow: ellipsis;
}
  
</style>

