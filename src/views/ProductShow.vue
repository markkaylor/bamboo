<template>
  <v-card 
    class="pa-8 mx-auto"
    width="1000px"
  >
    <h1>Insure your {{ product.name }}</h1>
    <v-row>
      <v-col>
        {{ product.description }}
      </v-col>
      <v-col>
        <CoverageChips :product="product" />
      </v-col>
    </v-row>
    
    
    <v-divider />
    <ContractForm 
      :product="product"
    />
  </v-card>
</template>

<script>
import ContractForm from '@/components/ContractForm.vue'
import CoverageChips from '@/components/CoverageChips.vue'

import { mapState } from 'vuex'

  export default {
    props: {
      id: {
        type: Number
      }
    },
    computed: {
      ...mapState({
        product: state => state.product.product,
      }),
    },
    created() {
      this.$store.dispatch('fetchProduct', this.id)
    },
    components: {
      ContractForm,
      CoverageChips
    }
  }
</script>

