<template>
  <v-sheet color="primary" 
    :class="{
      'pa-2 d-flex align-center search-bar' : true,
      'pl-0': $route.path === '/search-medicine' 
    }"
  >
    <span @click="$router.go(-1)" v-if="$route.name !== 'Home'">
      <v-icon large color="white">keyboard_arrow_left</v-icon>
    </span>
    <v-text-field
      @input="searchChanged"
      solo
      dense
      background-color="white"
      :label="label"
      hide-details
      @click="searchClicked"
    ></v-text-field>
</v-sheet>
</template>

<script>
export default {
  data: () => ({
    searchTerm: '',
    debounce: null
  }),
  computed: {
    label() {
      if (this.$route.name === 'Search Medicine') {
        return 'Search Medicines'
      } else if(this.$route.name === 'Lab Tests') {
        return 'Search Tests'
      } else {
        return 'Search Medicines'
      }
    },
  },
  methods: {
    searchClicked() {
      if (this.$route.path !== '/lab-test') {
        this.$router.push({ name: 'Search Medicine' });
      }
    },
    getSearchedItems(val) {
      this.$store.dispatch('pharmacy/searchMedicines', val);
    },
    setDefaults() {
      this.$store.commit('pharmacy/setMedicines', []);
      this.$store.commit('pharmacy/setSeeMore', false);
      this.$store.dispatch('pharmacy/getMedicines');
    },
    searchChanged(val) {
      // SEARCH FOR MEDICINES
      if (this.$route.path === '/search-medicine') {
        this.$store.commit('pharmacy/setSearched', val);
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          if (val.length === 0 || val === '') {
            return this.setDefaults();
          }
          this.getSearchedItems(val);  
        }, 700)
      } 
      // SEACH FOR TESTS
      else {
        console.log('asd')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .search-bar {
    position: sticky;
    top:0;
    z-index: 10;
  }
</style>