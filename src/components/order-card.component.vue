<template>
  <v-card outlined class="pa-2 my-2">
    <div class="d-flex align-center">
      <div>IMAGE</div>
      <div class="d-flex flex-column ml-4" style="width: 100%">
        <div>Medicine Name</div>
        <div>Price</div>
        <div class="d-flex justify-end">
          <!-- REMOVE -->
          <v-btn x-small outlined color="error">
            <v-icon small>remove</v-icon>
          </v-btn>

          <!-- QUANTITY -->
          <strong class="px-4">1</strong>

          <!-- ADD -->
          <v-btn x-small outlined color="green">
            <v-icon small>add</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex justify-end">
      <v-btn small class="mt-4" color="error" dark>
        <v-icon>delete</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>