<template>
  <v-card>
    <v-tabs v-model="tab" grow>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1"> {{ savedTitle }} </v-tab>
      <v-tab href="#tab-2"> {{ this.isEditing ? 'Edit Address' : addTitle }} </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat class="pa-4">
          <div v-if="tab === 'tab-1'">
            <saved-address
              :title="'Saved Addresses'"
              :subTitle="'You can save upto 5 addresses'"
              @switchTab="switchTab"
              @editAddress="editAddress"
            />
          </div>
          <div v-if="tab === 'tab-2'">
            <add-address @switchTab="switchTab" ref="addAddress"/>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import savedAddress from '../components/saved-address.component';
import addAddress from '../components/add-address.component';

export default {
  components: {
    savedAddress,
    addAddress
  },
  data: () => ({
    tab: null,
    savedTitle: 'Saved Addresses',
    addTitle: 'Add Address'
  }),
  computed: {
    addresses() {
      return this.$store.getters['address/getAddresses'];
    },
    isEditing() {
      return this.$store.getters['address/isEditingAddress'];
    }
  },
  methods: {
    switchTab(val) {
      console.log(val);
      this.tab = val;
    },
    checkForQueryParams() {
      if (this.$route.query) {
        const { tab } = this.$route.query;
        this.switchTab(tab);
      }
    },
    editAddress(item) {
      this.tab = 'tab-2';
      this.$store.commit('address/setEditing', true);
      this.$store.commit('address/setEditAddress', item);
    }
  },
  mounted() {
    if (this.addresses === undefined || this.addresses === null) {
      this.$store.dispatch('address/getAddress');
    }
  }
}
</script>
