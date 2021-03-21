<template>
  <v-app>
    <app-header class="mb-12"/>
    <search v-if="showSearchBar"/>
    <v-container class="mb-14">
      <router-view/>        
    </v-container>
    <bottom-menu/>

    <!-- PWA POPUP -->
    <info-modal :color="'primary'" v-if="showPWA">
      <template v-slot:heading>
        <strong>Download Our Mobile App</strong>
      </template>
      <template v-slot:body>
        <h3>If you dont like going to websites.</h3>
        <h4>You can simply install our app. Just hit the install button below</h4>
        <v-btn block color="primary" class="mt-4" @click="installPWA">Install</v-btn>
      </template>
    </info-modal>
  </v-app>
</template>

<script>
import appHeader from './components/header.component';
import bottomMenu from './components/bottom-menu.component';
import search from './components/search-bar.component';
import infoModal from './components/info-modal.component';

export default {
  name: 'App',
  components: {
    appHeader,
    bottomMenu,
    search,
    infoModal
  },
  data: () => ({
    pwaInstance: null,
    showPWA: false
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
        e.preventDefault();
        this.pwaInstance = e;
        this.showCustomPrompt();
      });
    },
    showCustomPrompt() {
      console.log('here3', this.pwaInstance, this.showPWA);
      this.showPWA = true;
    },
    async installPWA() {
      this.showPWA = false;
      this.pwaInstance.prompt();
      const { outcome } = await this.pwaInstance.userChoice;
      if (outcome !== '' || outcome === 'accepted') {
        window.close();
      } else {
        window.close();
      }
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