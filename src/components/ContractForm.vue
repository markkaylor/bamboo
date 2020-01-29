<template>
  <v-card 
    class="pa-8 mx-auto"
    width="1000px"
  >
    <v-form>
      <v-row>
        <v-col 
          sm="12" 
          md="6"
        >
          <h1>Insure your {{ product.name }}</h1>
          <v-text-field
            label="First Name"
            v-model="contract.firstName"
          />
          <v-text-field
            label="Last Name"
            v-model="contract.lastName"
          />
          <v-text-field
            label="Email"
            v-model="contract.email"
            type="email"
          />
        
        <h3>Choose the type of contract</h3> 
        <v-radio-group 
          row 
          v-model="contract.type"
          v-if="product.contractsAvailable"
        >
          <div
            row 
            v-for="(type, index) in contractsAvailable" 
            :key="index"
          >
            <v-radio
              :value="type"
              :label="type" 
            />
          </div>
        </v-radio-group>
        </v-col>
        <v-col sm="12" md="6">
        <div>
          <h3>Choose Start and End Dates for your Contract</h3> 
          <v-date-picker
            landscape
            range
            full-width
            v-model="contract.dates"
          />
        </div>
        <v-btn 
          color="success"
          block
          class="mt-2"
          @click="createContract"
        >
          Get A Quote!
        </v-btn>
        </v-col>
      </v-row>
    </v-form>  
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      succes: false,
      contract: {
        firstName: '',
        lastName: '',
        dates: [],
        type: '',
        productId: this.product.id,
      }
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  computed: {    
    daysSelected() {
      if (this.contract.dates.length === 1) {
        return this.contract.dates.length
      }

      let date1 = this.contract.dates[0].replace(/-/g,"")
      let date2 = this.contract.dates[1].replace(/-/g,"")
      return date2 - date1 + 1
    },
    daysAvailable() {
      let numDays = 0

      if (this.contract.type.toLowerCase() === 'day') {
        return numDays = 1
      }

      if (this.contract.type.toLowerCase() === 'weekend') {
        return numDays = 2
      }

      if (this.contract.type.toLowerCase() === 'week') {
        return numDays = 7
      }

      return numDays
    },
    contractsAvailable() {
      return this.product.contractsAvailable.filter(product => product !== "")
    },
    validateDays() {
      return this.daysSelected === this.daysAvailable
    },
  },
  methods: {
    createContract() {
      if (this.validateDays) {
        this.$store.dispatch('createContract', this.contract)
        .then(() => {
          this.$router.push({
            name: 'products',            
          })
        })
        .catch(() => {
          console.log("there was an error creating your contract")
        })
      }
    }
  },
}
</script>

