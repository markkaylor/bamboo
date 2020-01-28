<template>
  <v-app-bar app>
    <v-toolbar-title>{{ siteTitle }}</v-toolbar-title>
    <v-spacer />
    <router-link 
      :to="{name: 'sign-in'}" 
      v-if="!signedIn"
    >
      <v-btn text>Sign Up</v-btn>
    </router-link>
      <v-btn 
        text
        v-if="signedIn"
      >
        Dashboard
      </v-btn>
    <router-link :to="{name: 'products'}">
      <v-btn text>Products</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import { authComputed } from '@/store/helpers.js'
export default {
  data() {
    return {
      siteTitle: 'Bamboo'
    }
  },
  computed: {
    ...authComputed
  }
}
</script>



