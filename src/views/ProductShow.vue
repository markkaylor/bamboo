<template>
  <ContractForm :id="id" />
</template>

<script>
import ContractForm from '@/components/ContractForm.vue'
  export default {
    props: {
      id: {
        type: String
      }
    },
    created() {
      this.$store.dispatch('fetchProducts')
    },
    components: {
      ContractForm
    }
  }
</script>

