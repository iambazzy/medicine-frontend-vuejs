<template>
  <v-card elevation="0" class="pa-2 mb-2 d-flex align-center" ripple @click="goToDetail()">
    <div>
      IMAGE
    </div>
    <div class="d-flex flex-column ml-10" style="width: 100%;">
      <h4>Medicine Name</h4>
      <p>price</p>
      <div class="d-flex align-center justify-space-between">
        <v-chip x-small color="primary"> company name </v-chip>
        <v-btn icon color="black">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  methods: {
    goToDetail() {
      this.$router.push({ name: 'Product Details' });
    }
  }
}
</script>

<style>

</style>