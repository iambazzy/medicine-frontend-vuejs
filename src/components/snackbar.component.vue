<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" top :color="color" dark>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.snackbar;
      },
      set() {
        this.$store.commit('hideSnackbar');
      }
    },
    timeout() {
      return this.$store.getters.timeout;
    },
    message() {
      return this.$store.getters.message;
    },
    color() {
      return this.$store.getters.color;
    }
  }
}
</script>
