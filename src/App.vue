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
import appHeader from './components/header.component';
import bottomMenu from './components/bottom-menu.component';
import search from './components/search-bar.component';

export default {
  name: 'App',
  components: {
    appHeader,
    bottomMenu,
    search
  },
  data: () => ({
    pwaInstance: null
  }),
  computed: {
    showSearchBar() {
      const routes = ['Home', 'Search Medicine', 'Lab Tests'];
      const visible = routes.includes(this.$route.name) ? true : false;
      return visible;
    }
  },
  methods: {
    getPwaInstance() {
      window.addEventListener('beforeinstallprompt',(e) => {
        console.log('e',e);
        e.preventDefault();
        this.pwaInstance = e;
        this.showCustomPrompt();
      });
    },
    showCustomPrompt() {
      console.log('here', this.pwaInstance);
    }
  },
  mounted() {
    this.getPwaInstance();
  }
};
</script>

<style lang="scss">
  #app {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(247, 247, 247);
  }
</style>