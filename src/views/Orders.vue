<template>
  <div>
    <h2>Your Orders.</h2>
    <small>You have ({{ orders.length  }}) order/s.</small>
    <div v-if="orders.length > 0">
      <!-- ORDERS -->
      <order-card 
        v-for="(item, index) in orders"
        :key="index"
        :data="item"
      />
      <!-- SEE MORE -->
      <div class="d-flex justify-center" v-if="orders.length > 1 && showMoreStatus">
        <v-btn small outlined color="primary" @click="getOrders()">
          <strong>SEE MORE</strong>
        </v-btn>
      </div>
    </div>
    <!-- NO ORDERR -->
    <v-card v-else elevation="0" outlined class="d-flex justify-center align-center flex-column py-16 mt-16">
      <v-icon color="black" x-large> shopping_bag </v-icon>
      <h5 class="mt-6">You haven't placed any orders yet.</h5>
      <v-btn outlined class="mt-6" color="primary" @click="$router.push({ path: '/search-medicine' })">
        <strong>BUY MEDICINES</strong>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import orderCard from '../components/order-card-final';

export default {
  components: {
    orderCard
  },
  computed: {
    orders() {
      return this.$store.getters['orders/getOrders'];
    },
    showMoreStatus() {
      return this.$store.getters['orders/getShowStatus']
    }
  },
  methods: {
    getOrders() {
      this.$store.dispatch('orders/getOrders');
    },
  },
  mounted() {
    this.getOrders();
  },
  beforeDestroy () {
    this.$store.commit('orders/resetOrders');
    this.$store.commit('orders/setMainId', '');
  }
}
</script>

<style>

</style>