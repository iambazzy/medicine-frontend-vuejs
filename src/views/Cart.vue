<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> 
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!-- #1 -->
      <v-stepper-content step="1">
        <div>
          ads
        </div>
        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>
      </v-stepper-content>

      <!-- #2 -->
      <v-stepper-content step="2">
        <div>
          <saved-address
            :title="'Select Address.'"
            :subTitle="'Please select a delivery address.'"
            @switchTab="switchTab"
          />
        </div>
      </v-stepper-content>
      
      <!-- #3 -->
      <v-stepper-content step="3">
        <div>
          last
        </div>
        <v-btn color="primary" @click="e1 = 1">
          Place Order
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import savedAddress from '../components/saved-address.component';

export default {
  components: {
    savedAddress
  },
  data: () => ({
    e1: 1,
  }),
  methods: {
    switchTab(val) {
      this.$router.push({ path: '/address', query: { tab: val } });
    }
  }
}
</script>

<style>

</style>