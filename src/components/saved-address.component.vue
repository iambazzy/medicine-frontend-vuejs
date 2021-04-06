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
            <v-btn small class="mr-2" icon v-if="$route.path !== '/cart'" @click="editAddress(item)">
              <v-icon color="black">mode</v-icon>
            </v-btn>
            <v-btn small class="mr-2" icon v-if="$route.path !== '/cart'" @click="deleteAddress(item)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
            <v-btn class="d-flex align-center" outlined block small color="primary" dark @click="proceed(item)" v-if="$route.path == '/cart'">
              <strong>Deliver to this address</strong>
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
    <!-- INFO MODAL -->
    <info-modal :color="'error'" :showActionButtons="false" ref="modal">
      <template v-slot:heading>
        <strong>Are You Sure ?</strong>
      </template>
      <template v-slot:body>
        <div style="text-align: justify">
          <strong>Press delete if you want to remove the address. If you don't want to delete it then press the cancel button.</strong>
        </div>
        <div class="mt-8 d-flex justify-end">
          <v-btn text color="primary" small @click="$refs.modal.toggleDialog()">
            <strong>cancel</strong>
          </v-btn>
          <v-btn text color="error" small @click="deleteFinal()">
            <strong>delete</strong>
          </v-btn>
        </div>
      </template>
    </info-modal>
  </div>
</template>

<script>
import infoModal from '../components/info-modal.component';

export default {
  components: {
    infoModal
  },
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
  data: () => ({
    selectedAddress: null
  }),
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
    },
    deleteAddress(address) {
      this.selectedAddress = address;
      this.$refs.modal.toggleDialog();
    },
    deleteFinal() {
      this.$store.dispatch('address/deleteAddress', this.selectedAddress._id);
      this.$refs.modal.toggleDialog();
    },
    editAddress(item) {
      this.$emit('editAddress', item);
    }
  }
} 
</script>

<style>

</style>