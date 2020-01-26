<template>
 <div>hello</div>
</template>

<script>
import ProductService from '@/services/ProductService.js'


export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      product: {}
    }
  },
  computed: {
    
  },
  created() {
    ProductService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.log('woah there was an error ' + error)
      })
  },

}
</script>