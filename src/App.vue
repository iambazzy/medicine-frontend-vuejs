<template>
  <v-app>
    <app-header/>
    <v-container>
      <router-view/>        
    </v-container>
    <bottom-menu/>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    appHeader: () => import('./components/header.component'),
    bottomMenu: () => import('./components/bottom-menu.component')
  },

  data: () => ({
  
  }),
};
</script>

<style lang="scss">
  #app {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(247, 247, 247);
  }
</style>