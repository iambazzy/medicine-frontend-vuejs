<template>
  <v-app>
    <snackbar/>
    <loader/>
    <app-header class="mb-12"/>
    <search v-if="showSearchBar"/>
    <v-container class="mb-14">
      <router-view/>        
    </v-container>
    <bottom-menu/>

    <!-- PWA POPUP -->
    <info-modal :color="'primary'" ref="pwa">
      <template v-slot:heading>
        <strong>Download Our Mobile App</strong>
      </template>
      <template v-slot:body>
        <h3>If you dont like websites and prefer using an app.</h3>
        <small >You can simply install the lite version of our app. Just hit the install button below</small>
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
import loader from './components/loader.component';
import snackbar from './components/snackbar.component';

export default {
  name: 'App',
  components: {
    appHeader,
    bottomMenu,
    search,
    infoModal,
    loader,
    snackbar,
  },
  data: () => ({
    pwaInstance: null,
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
      this.$refs.pwa.toggleDialog();
    },
    async installPWA() {
      this.$refs.pwa.toggleDialog();
      this.pwaInstance.prompt();
      const { outcome } = await this.pwaInstance.userChoice;
      if (outcome !== '' || outcome === 'accepted') {
        window.close();
      } else {
        window.close();
      }
    },
    async checkifLoggedIn() {
      if (localStorage.getItem('user')) {
        const token = JSON.parse(localStorage.getItem("user")).token;
        this.$store.dispatch('account/verifyToken', { token });
        this.$store.dispatch('cart/getCart');
      }
    }
  },
  mounted() {
    this.getPwaInstance();
    this.checkifLoggedIn();
  }
};
</script>

<style lang="scss">
  #app {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(247, 247, 247);
  }
</style>