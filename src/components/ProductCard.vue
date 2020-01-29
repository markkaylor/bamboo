<template>
  <router-link :to="{name: 'product-show', params: {id: product.id }}">
    <v-card 
      height="300"
      class="align-content-between" 
    >
      <v-card-text class="pa-0 overflow">
        <v-card-title 
          class="justify-center white--text pa-12 rounded"
          :class="color"
        >
          {{ product.name }}
        </v-card-title>
      </v-card-text>
      <div class="flex-container">
        <v-card-text>
          <CoverageChips :product="product" />
          {{ product.description }}
        </v-card-text>
      </div>
    </v-card>
  </router-link>
</template>

<script>
import CoverageChips from '@/components/CoverageChips.vue'

  export default {
    props: {
      product: {
        type: Object,
      },
      color: {
        type: String,
      }
    },
    components: {
      CoverageChips
    }
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

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

