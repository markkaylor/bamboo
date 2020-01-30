<template>
  <v-card 
    width="400" 
    class="mx-auto"
  >
    <v-card-title>
      <h1 class="display-1">{{ action }}</h1>
    </v-card-title>
    <v-card-text>
      <!-- TODO: 
        Create base components for form and form inputs 
        Create separate components for sign in sign up
      -->
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
        @click="toggleMethod"
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
        <v-alert 
          v-if="error"
          type="error"
          dismissible
        >
          {{ error }}
        </v-alert>
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
        error: null,
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
      },
      toggleMethod() {
        return this.newUser ? this.createUser : this.signInUser
      }
    },
    /**
     * Toggle sign in or sign up
     */
    methods: {
      toggleHasAccount() {
        this.newUser = !this.newUser
      },
      /**
       * Toggle show hide password
       */
      toggleShowPassword() {
        this.showPassword = !this.showPassword
      },
      /**
       * Sign user up or return error
       */
      createUser() {
        this.$store.dispatch('createUser', this.user).then(() => {
          this.$router.push({ name: 'products' })
        })
        .catch(err => {
          this.error = err.response.data
        })
      },
      /**
       * Sign user in and redirect to product or return errors
       */
      signInUser() {
        this.$store.dispatch('signInUser', {
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          this.$router.push({ name: 'products' })
        })
        .catch(err => {
          this.error = err.response.data
        })
      }
    }
  })
</script>