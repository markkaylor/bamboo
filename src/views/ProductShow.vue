<template>
  <ContractForm 
    :product="product" 
  />
</template>

<script>
import ContractForm from '@/components/ContractForm.vue'
import { mapState } from 'vuex'

  export default {
    props: {
      id: {
        type: Number
      }
    },
    computed: {
      ...mapState({
        product: state => state.product.product
      }),
    },
    created() {
      console.log(typeof this.id)
      this.$store.dispatch('fetchProduct', this.id)
    },
    components: {
      ContractForm
    }
  }
</script>

