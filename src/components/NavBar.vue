<template>
  <v-app-bar app>
    <v-toolbar-title>{{ siteTitle }}</v-toolbar-title>
    <v-spacer />
    <router-link :to="{name: 'sign-in'}">
      <v-btn text>Sign In</v-btn>
    </router-link>
    <router-link :to="{name: 'products'}">
      <v-btn text>Products</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: 'Bamboo'
    }
  },
}
</script>



