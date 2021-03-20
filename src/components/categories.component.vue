<template>
  <v-row class="mt-2">
    <v-col cols="6" v-for="(item, index) in categories" :key="index">
      <v-card class="py-4 d-flex flex-column" elevation="0" ripple @click="handleCategoryClick(item)">
        <div class="d-flex justify-center">
          <v-icon x-large color="primary">{{ item.icon }}</v-icon>
          </div>
        <div class="d-flex justify-center mt-3">
          <strong>{{ item.label }}</strong>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    categories: [ 
      { 
        label: 'Buy Medicines',
        icon: 'bloodtype',
        path: '/search-medicine'
      },
      { 
        label: 'Book Lab Tests',
        icon: 'biotech',
        path: '/lab-test'
      },
    ]
  }),
  methods: {
    handleCategoryClick(item) {
      this.$router.push({ path: item.path });
    }
  }
}
</script>

<style>

</style>