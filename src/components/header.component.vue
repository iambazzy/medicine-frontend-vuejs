<template>
  <v-sheet color="primary" class="px-4 py-3 white--text">
    <div class="d-flex justify-space-between align-center">
      <div>LOGO</div>
      <div>
        <v-badge content="0" overlap color="dark">
          <v-btn icon color="white">
            <v-icon>shopping_cart</v-icon>
          </v-btn>
        </v-badge>
      </div>
    </div>

    <div class="pt-3">
      <v-text-field
        v-model="searchTerm"
        solo
        dense
        background-color="white"
        label="Search Medicines"
        hide-details
        append-icon="search"
        @click="searchClicked"
        
      ></v-text-field>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    searchClicked() {
      this.$router.push({ name: 'Search Medicine' })
    }
  }
}
</script>

<style>
</style>