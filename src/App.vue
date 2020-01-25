<template>
  <v-app>
    <v-content>
      <LoginForm/>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'App',

  components: {
    LoginForm,
  },

  data: () => ({
    //
  }),
};
</script>
