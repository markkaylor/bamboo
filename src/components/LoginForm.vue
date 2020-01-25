<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
          label="Email" 
          type="email"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field 
          label="Password" 
          :type="passwordType"
          prepend-icon="mdi-lock"
          :append-icon="passwordIcon"
          @click:append="toggleShowPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="success">Sign Up</v-btn>
      <v-spacer />
      <v-btn color="info">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        showPassword: false,
      }
    },
    computed: {
      passwordType() {
        return this.showPassword ? 'text' : 'password'
      },
      passwordIcon() {
        return this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
      }
    },
    methods: {
      toggleShowPassword() {
        this.showPassword = !this.showPassword
      }
    }
  })
</script>