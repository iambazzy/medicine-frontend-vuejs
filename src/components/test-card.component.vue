<template>
  <v-card class="d-flex justify-space-between pa-4 mb-2" elevation="0">
    <!-- Test Name -->
    <div>Test Name</div>

    <!-- Add button -->
    <div>
      <slot name="add-button"></slot>
    </div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>