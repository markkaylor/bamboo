<template>
  <v-card 
    width="500" 
    class="mx-auto"
  >
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
          height="75"
          label="Product Description"
        />
        
        <v-text-field
          v-model="itemValue"
          placeholder="Press enter to add item"
          label="Add Coverage"
          @keyup.enter="addItem"
        />

        <v-chip
          v-for="item in product.coverage" :key="item"
          class="ma-2 coverage"
          close
          small
          @click:close="product.coverage.splice(index, 1)"
        > 
          {{ item }}
        </v-chip>     
          
      </v-card-text>
      <v-card-title>What types of contracts are available?</v-card-title>   
      <v-card-text>
        <v-row justify="space-around">
          <v-checkbox 
            label="Day"
            value="Day"
            v-model="product.contractsAvailable"
          />
          <v-checkbox 
            label="Weekend"
            value="Weekend"
            v-model="product.contractsAvailable"
          />
          <v-checkbox 
            label="Week"
            value="Week"
            v-model="product.contractsAvailable"
          />
        </v-row>
        <v-btn 
          color="success"
          block
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
      itemValue: '',
      product: this.createFreshProductObject(),       
    }
  },
  computed: {
    // dateRangeText () {
    //   return this.product.contract.dates.join(' ~ ')
    // },
  },
  methods: {
    addItem() {
      this.product.coverage.push(this.itemValue)
      this.itemValue = ''
    },
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
        contractsAvailable: [],
        coverage: []
      }
    },
  },
}
</script>


