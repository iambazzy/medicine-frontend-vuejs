<template>
  <div>
    <v-card elevation="2" v-for="(item, index) in 5" :key="index" class="pa-2 mb-4" >
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
</template>

<script>
export default {

}
</script>

<style>

</style>