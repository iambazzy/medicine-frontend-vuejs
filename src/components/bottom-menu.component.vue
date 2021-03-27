<template>
  <v-bottom-navigation 
    v-model="value" 
    fixed 
    grow
    class="d-flex align-center"
    background-color="primary"
    dark
  >
    <v-btn 
      color="primary" 
      style="height: 100%; color: white;"
      v-for="(item, index) in buttons"
      :key="index"
      :to="item.path"
    >
      <span v-if="item.label === 'Account'">{{ loggedIn ? 'My Profile' : item.label }}</span>
      <span v-else>{{ item.label }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 0,
    buttons: [
      { label: 'Home', icon: 'home', path: '/' },
      { label: 'Pharmacy', icon: 'medical_services', path: '/search-medicine' },
      { label: 'Lab Tests', icon: 'science', path: '/lab-test' },
      { label: 'Account', icon: 'account_circle', path: '/account' },
    ]
  }),
  computed: {
    loggedIn() {
      return this.$store.getters['account/loggedIn'];
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>

</style>