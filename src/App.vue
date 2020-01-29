<template>
  <v-app>
    <nav-bar />
    <v-content class="mt-5"> 
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
