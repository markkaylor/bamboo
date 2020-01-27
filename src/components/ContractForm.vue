<template>
  <div>
    <v-form>
      <h1>Insure your Iphone</h1>
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
      >
        <div
          row 
          v-for="type in product.contractsAvailable" 
          :key="type"
        >
          <v-radio 
          :value="type"
          :label="type" 
          />
        </div>
      </v-radio-group>
      <div>
        <h3>Choose Start and End Dates for your Contract</h3> 
        <v-date-picker
          landscape
          range
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
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      succes: false,
      contract: {
        firstName: '',
        lastName: '',
        dates: [],
        type: ''
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
    ...mapState({
      product: state => state.product.product
    }),
    
  //   daysSelected() {
  //     return this.contract.dates[1] - this.contract.dates[0] + 1
  //   },
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
    }
  },
  methods: {
  //   validateDays() {
  //     if (daysSelected === daysAvailable) {
  //       console.log('Success!')
  //     } else {
  //       console.log('uh oh please try again')
  //     }
  //   }

    createContract() {
      this.$store.dispatch('createContract', this.contract)
        .then(() => {
          this.$router.push({
            name: 'products',
            props: { contractSucccess: true }
          })
        })
        .catch(() => {
          console.log("there was an error creating your contract")
        })
    }
  },
}
</script>

