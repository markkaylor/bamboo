<template>
  <v-card width="400" class="mx-auto">
    <v-card-title>
      <h1 class="display-1">{{ action }}</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Name"
          prepend-icon="mdi-account-circle"
          v-if="newUser"
          v-model="user.name"
        />
        <v-text-field 
          label="Email"
          type="email"
          prepend-icon="mdi-email"
          v-model="user.email" 
        />
        <v-text-field 
          label="Password" 
          :type="passwordType"
          v-model="user.password"
          prepend-icon="mdi-lock"
          :append-icon="passwordIcon"
          @click:append="toggleShowPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions class="flex-column">
      <v-btn 
        color="success"
        block
        @click="createUser"
      >
        {{ action }}
      </v-btn>
      <span class="mt-2">
        {{ hasAccountMessage }}
        <a 
          @click="toggleHasAccount"
        >
          {{ hasAccountAction}}
        </a>
      </span>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        showPassword: false,
        newUser: true,
        user: {
          name: '',
          email: '',
          password: '',
          admin: false,
        }
      }
    },
    computed: {
      passwordType() {
        return this.showPassword ? 'text' : 'password'
      },
      passwordIcon() {
        return this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
      },
      action() {
        return this.newUser ? 'Sign Up' : 'Sign In'
      },
      hasAccountMessage() {
        return this.newUser ? 'Already have an account? ' : 'Don\'t have an account yet? '
      },
      hasAccountAction() {
        return this.newUser ? 'Sign In' : 'Sign Up'
      }
    },
    methods: {
      toggleHasAccount() {
        this.newUser = !this.newUser
      },
      toggleShowPassword() {
        this.showPassword = !this.showPassword
      },
      createUser() {
        this.$store.dispatch('createUser', this.user)
      }
    }
  })
</script>