<template>
  <v-card>
    Insure your {{ product.name }}
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
    {{ daysAvailable }} days available
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      contract: {
        user: {},
        dates: [],
        type: ''
      }
    }
  },
  props: {
    id: {
      type: String
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
  // },
  // methods: {
  //   validateDays() {
  //     if (daysSelected === daysAvailable) {
  //       console.log('Success!')
  //     } else {
  //       console.log('uh oh please try again')
  //     }
  //   }
  },
  created() {
    this.$store.dispatch('fetchProduct', this.id)
  },

}
</script>

