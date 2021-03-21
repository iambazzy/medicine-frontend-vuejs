<template>
  <div class="d-flex flex-column">
    <strong>Saved Addresses.</strong>
    <small>You can save upto 5 addresses.</small>
    <!-- CHECK IF ADDRESSES -->
    <div v-if="false">
      <v-card elevation="2" v-for="(item, index) in 5" :key="index" class="pa-2 mb-2 mt-2" >
        <div class="d-flex flex-column">
          <strong>Name</strong>
          <small>Street - Phone</small>
          <small>Landmark</small>
          <small>State - City - Pincode</small>
          <!-- Buttons -->
          <div class="d-flex justify-end mt-3">
            <v-btn small class="mr-2" icon>
              <v-icon color="black">mode</v-icon>
            </v-btn>
            <v-btn small class="mr-2" icon>
              <v-icon color="red">delete</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon color="green">check_circle</v-icon>
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

}
</script>

<style>

</style>