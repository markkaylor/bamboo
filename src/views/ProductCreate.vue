<template>
  <v-card width="500">
    <v-form>
      <v-card-title>Add a Product:</v-card-title>
      <v-card-text> 
        <v-text-field 
          v-model="product.name"
          label="Product Name"           
        />
        <v-textarea 
          v-model="product.description"
          outlined
          label="Product Description"
        />
      </v-card-text>
      <v-card-title>What types of contracts are available?</v-card-title>   
      <v-card-text>
        <v-row justify="space-around">
          <v-checkbox 
            label="Day"
            value="Day"
            v-model="product.contractsAvailable.day"
          />
          <v-checkbox 
            label="Weekend"
            value="Weekend"
            v-model="product.contractsAvailable.weekend"
          />
          <v-checkbox 
            label="Week"
            value="Week"
            v-model="product.contractsAvailable.week"
          />
        </v-row>
        <v-btn 
          color="success"
          @click="createProduct"
        >
          Submit
        </v-btn>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      product: this.createFreshProductObject(),       
    }
  },
  computed: {
    // dateRangeText () {
    //   return this.product.contract.dates.join(' ~ ')
    // },
  },
  methods: {
    createProduct() {
      this.$store
        .dispatch('createProduct', this.product)
        .then(() => {
          // this.$router.push({
          //   name: 'product-show',
          //   params: { id: this.product.id }
          // })
          this.product = this.createFreshProductObject()
        })
        .catch(() => {
          console.log('There was a problem creating your Product!')
        })
    },
    createFreshProductObject() {
      return {
        name: '',
        description: '',
        contractsAvailable: {
          day: '',
          weekend: '',
          week: '',
        },
        coverage: []
      }
    },
  },
}
</script>


