<template>
  <v-card 
    elevation="0" 
    :class="{'pa-2 mb-2 d-flex align-center' : true }" 
    ripple 
    @click="goToDetail()"
  >
    <div>
      IMAGE
    </div>
    <div :class="{'d-flex flex-column ml-10': true }" style="width: 100%;">
      <h4>{{ product.name }}</h4>
      <p>{{ product.mrp }}</p>
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
  props: ['product'],
  methods: {
    goToDetail() {
      this.$router.push({ name: 'Product Details', query: { id: this.product._id } });
    }
  }
}
</script>

<style>

</style>