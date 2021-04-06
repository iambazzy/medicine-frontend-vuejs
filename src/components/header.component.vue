<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" app style="z-index: 20;">
      <div class="d-flex justify-space-between align-center custom-head">
        <div>LOGO HERE</div>
        <span @click="drawer = !drawer">
          <v-icon medium color="black">keyboard_arrow_left</v-icon>
        </span>
      </div>
    </v-navigation-drawer>
    <!-- TOP NAV BAR -->
    <v-app-bar app color="primary" flat dense class="pr-0">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon color="white">menu</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title class="white--text">
        <div class="d-flex">
          <span @click="$router.push({ path: '/cart' })"> 
            <v-icon color="white">shopping_cart</v-icon>
          </span>
          <v-chip x-small class="pa-2" color="white"> 
           {{ loggedIn ? cartItemsLength : 0 }} 
          </v-chip>
      </div>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    searchTerm: ''
  }),
  computed: {
    cartItemsLength() {
      return this.$store.getters['cart/getCartItems'].length;
    },
    loggedIn() {
      return this.$store.getters['account/loggedIn'];
    }
  },
  methods: {
    searchClicked() {
      this.$router.push({ name: 'Search Medicine' })
    },
  },
  mounted() {   
  }
}
</script>

<style scoped lang="scss">
  .custom-head {
    border-bottom: 1px solid lightgray;
    padding: 10px
  }
</style>