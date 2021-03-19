<template>
  <v-bottom-navigation 
    v-model="value" 
    fixed 
    grow
    class="d-flex align-center"
    background-color="primary"
  >
    <v-btn 
      color="primary" 
      style="height: 100%; color: white;"
      v-for="(item, index) in buttons"
      :key="index"
      @click="handleRoute(item)"
    >
      <span>{{ item.label }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 0,
    buttons: [
      { label: 'Home', icon: 'home', path: 'Home' },
      { label: 'Pharmacy', icon: 'medical_services', path: 'Pharmacy' },
      { label: 'Lab Tests', icon: 'science', path: 'Lab Tests' },
      { label: 'Account', icon: 'account_circle', path: 'Account' },
    ]
  }),
  methods: {
    handleRoute(item) {
      this.$router.push({ name: item.path })
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>