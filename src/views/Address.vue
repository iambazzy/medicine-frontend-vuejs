<template>
  <v-card>
    <v-tabs v-model="tab" grow>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1"> Saved Addresses </v-tab>
      <v-tab href="#tab-2"> Add Address </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat class="pa-4">
          <div v-if="tab === 'tab-1'">
            <saved-address
              :title="'Saved Addresses'"
              :subTitle="'You can save upto 5 addresses'"
              @switchTab="switchTab"
            />
          </div>
          <div v-if="tab === 'tab-2'">
            <add-address @switchTab="switchTab"/>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import savedAddress from '../components/saved-address.component';
import addAddress from '../components/add-address.component';
import addressModule from '../store/address';

export default {
  components: {
    savedAddress,
    addAddress
  },
  data: () => ({
    tab: null,
  }),
  computed: {
    addresses() {
      return this.$store.getters['address/getAddresses'].addresses;
    }
  },
  methods: {
    switchTab(val) {
      this.tab = val;
    },
    checkForQueryParams() {
      if (this.$route.query) {
        const { tab } = this.$route.query;
        this.switchTab(tab);
      }
    },
    initializeModule() {
      this.$store.registerModule('address', addressModule);
    },
  },
  async created() {
    await this.initializeModule();
    this.checkForQueryParams();
  },
  mounted() {
    if (this.addresses === undefined || this.addresses.length === 0) {
      this.$store.dispatch('address/getAddress');
    }
  },
  beforeDestroy () {
    this.$store.unregisterModule('address');
  }
}
</script>
