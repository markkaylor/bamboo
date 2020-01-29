<template>
  <v-app-bar app>
    <v-toolbar-title>
      {{ siteTitle }} 
    </v-toolbar-title>
    <v-spacer />
    <router-link 
      :to="{name: 'sign-in'}" 
      v-if="!signedIn"
    >
      <v-btn text>Sign Up</v-btn>
    </router-link>
      <v-btn 
        text
        v-else
        @click="signOut"
      >
        Sign Out
      </v-btn>
    <router-link
      :to="{name: 'product-create'}"
      v-if="isAdmin"
    >
      <v-btn text>
        Add Product
      </v-btn>
    </router-link>
    <router-link :to="{name: 'products'}">
      <v-btn text>Products</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import { authComputed } from '@/store/helpers.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      siteTitle: 'Bamboo'
    }
  },
  computed: {
    ...authComputed,
    ...mapState(['user']),
    isAdmin() {
      return this.user.user && this.user.user.admin
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOutUser')
    }
  }
}
</script>



