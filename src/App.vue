<template>
  <v-app>
    <app-header class="mb-12"/>
    <search v-if="showSearchBar"/>
    <v-container class="mb-14">
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
    bottomMenu: () => import('./components/bottom-menu.component'),
    search: () => import('./components/search-bar.component')
  },
  computed: {
    showSearchBar() {
      const routes = ['Home', 'Search Medicine', 'Lab Tests'];
      const visible = routes.includes(this.$route.name) ? true : false;
      return visible;
    }
  },
  data: () => ({
  
  })
};
</script>

<style lang="scss">
  #app {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(247, 247, 247);
  }
</style>