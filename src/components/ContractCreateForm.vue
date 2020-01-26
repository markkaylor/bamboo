<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field 
          label="Type of Contract (day, weekend, or week)"           
        />
        <v-text-field 
          label="Set the Price" 
        />
        <v-text-field 
          label="First Name"           
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        type: '',
        price: '',
        coverage: [],
      }
    }
  }
</script>

