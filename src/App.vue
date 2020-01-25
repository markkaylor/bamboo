<template>
  <v-app>
    <NavBar />
    <v-content> 
      <LoginForm/>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from '@/components/LoginForm';
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: {
    LoginForm,
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
