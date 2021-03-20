<template>
  <v-sheet color="primary" 
    :class="{'pa-2 d-flex align-center' : true, 'search-bar pl-0': showButtons }"
  >
    <span @click="$router.go(-1)" v-if="showButtons">
      <v-icon large color="white">keyboard_arrow_left</v-icon>
    </span>
    <v-text-field
      v-model="searchTerm"
      solo
      dense
      background-color="white"
      :label="label"
      hide-details
      @click="searchClicked"  
    ></v-text-field>
    <v-btn class="ml-2" color="white" style="height: 100%" v-if="showButtons">
      <v-icon color="primary">search</v-icon>
    </v-btn>
</v-sheet>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    showButtons() {
      if (this.$route.name === 'Search Medicine' || this.$route.name === 'Lab Tests') {
        return true;
      } return false;
    },
    label() {
      if (this.$route.name === 'Search Medicine') {
        return 'Search Medicines'
      } else if(this.$route.name === 'Lab Tests') {
        return 'Search Tests'
      } else {
        return 'Search Medicines'
      }
    }
  },
  methods: {
    searchClicked() {
      this.$router.push({ name: 'Search Medicine' })
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