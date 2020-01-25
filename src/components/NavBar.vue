<template>
  <v-app-bar app>
    <v-bar-title>Bamboo</v-bar-title>
    <v-spacer />
    <v-btn 
      text
      v-for="link in links"
      :key="link"
    >
      {{ link }}
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          'Products',
          'Login',
        ]
      }
    }
  }
</script>

