<template>
  <div class="d-flex flex-column">
    <strong>{{ title }}</strong>
    <small>{{ subTitle }}</small>
    <!-- CHECK IF ADDRESSES -->
    <div v-if="addresses && addresses.addresses !== []">
      <v-card elevation="2" v-for="(item, index) in addresses.addresses" :key="index" class="pa-2 mb-2 mt-2" >
        <div class="d-flex flex-column">
          <strong style="text-transform: capitalize;">{{ item.firstname }} {{ item.lastname }}</strong>
          <small>{{ item.email }}</small>
          <small>{{ item.street }} - {{ item.landmark }}</small>
          <small>{{ item.phone }}</small>
          <small>{{ item.pincode }}</small>
          <!-- Buttons -->
          <div class="d-flex justify-end mt-3">
            <v-btn small class="mr-2" icon v-if="$route.path !== '/cart'">
              <v-icon color="black">mode</v-icon>
            </v-btn>
            <v-btn small class="mr-2" icon v-if="$route.path !== '/cart'">
              <v-icon color="red">delete</v-icon>
            </v-btn>
            <v-btn small color="primary" dark @click="proceed(item)" v-if="$route.path == '/cart'">
              <v-icon>check_circle</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <!-- IF NOT -->
    <div v-else class="py-16 d-flex justify-center flex-column align-center">
      <v-icon x-large color="warning">warning</v-icon>
      <strong>You don't have any saved addresses.</strong>
      <v-btn class="mt-6" small color="primary" @click="$emit('switchTab', 'tab-2')">Add Address</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    addresses() {
      return this.$store.getters['address/getAddresses']
    }
  },
  methods: {
    proceed(item) {
      if (this.$route.path === '/cart') {
        this.$emit('proceed', item);
      }
    }
  }
} 
</script>

<style>

</style>