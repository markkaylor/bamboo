<template>
  <v-card width="500">
      <v-form>
        <v-card-title>Add a Product</v-card-title>
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
        <v-card-title>Add the Contract for this Product</v-card-title>   
        <v-card-text>
          <v-row justify="center">
            <v-date-picker
              v-model="product.contract.dates"
              label="Choose the start and end date"
              landscape
              range
            />
          </v-row>
          <v-text-field v-model="dateRangeText" label="Dates Selected" readonly />
          <v-text-field
            v-model="product.contract.price"
            label="price"
          />
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
    dateRangeText () {
      return this.product.contract.dates.join(' ~ ')
    },
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
        contract: {
          price: '',
          dates: [],
        },
      }
    },
  },
}
</script>


