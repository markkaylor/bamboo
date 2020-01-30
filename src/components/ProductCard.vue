<template>
  <router-link :to="{name: 'product-show', params: {id: product.id }}">
    <v-card 
      min-height="350"
      class="align-content-between flex-container" 
    >
      <v-card-text class="pa-0 overflow">
        <v-card-title 
          class="justify-center white--text pa-12 rounded"
          :class="color"
        >
          {{ product.name }}
        </v-card-title>
      </v-card-text>
      
        <v-card-text class="flex-spread">
          <CoverageChips :product="product" />
          {{ product.description }}
          <div 
            class="flex-end"
          >
            <v-divider class="mb-1 mt-1"/>
            <span class="mb-0 font-weight-bold">Contracts Available: | </span>
            <span
              v-for="type in contracts" 
              :key="type"              
            >
              {{ type }} |
            </span> 
          </div>         
        </v-card-text>
      
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
    computed: {
      contracts() {
        return this.product.contractsAvailable.filter(product => product !== "")
      },
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
}

.flex-spread {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex {
  display: flex;
  align-items: flex-end;
}
</style>

