<template>
  <v-app>
    <nav-bar />
    <v-content width="1200" class="mx-auto"> 
      <router-view />
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
