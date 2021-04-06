<template>
  <v-stepper v-model="tab">
    <v-stepper-header class="d-flex align-center pl-4">
      
      <!-- BACK BUTTON -->
      <v-btn icon v-if="tab > 1" @click="goBack()">
        <v-icon>arrow_back_ios</v-icon>
      </v-btn>
      <!-- BACK BUTTON -->

      <v-stepper-step :complete="tab > 1" step="1" />
      <v-divider></v-divider>
      
      <v-stepper-step :complete="tab > 2" step="2" />
      <v-divider></v-divider>
      
      <v-stepper-step step="3" /> 
    </v-stepper-header>

    <v-stepper-items>
      <!-- #1 -->
      <v-stepper-content step="1" class="pa-3">
        <div class="d-flex flex-column">
          <strong>Cart.</strong>
          <small>Your shopping bag.</small>
        </div>
        <div>
          <div class="d-flex flex-column mt-6">
            <div class="d-flex justify-space-between">
              <div>{{ cartItems.length }} items</div>
              <div>Total: ₹{{ cartTotal }}</div>
            </div>
            <div class="d-flex flex-column mt-4 mb-4">
              <order-card 
                v-for="(item, index) in cartItems" 
                :key="index"
                :data="item"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-end" v-if="cartItems.length > 0">
          <v-btn color="primary" @click="tab = 2">
            Continue
          </v-btn>
        </div>
        <div v-else class="d-flex justify-center align-center flex-column py-8">
          <v-icon x-large color="error">error</v-icon>
          <h2>Cart is empty</h2>
          <v-btn outlined small color="primary" class="mt-4" @click="$router.push({ path: '/search-medicine' })">
            Go to pharmacy
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- #2 -->
      <v-stepper-content step="2" class="pa-3">
        <div class="px-1">
          <saved-address
            :title="'Select Address.'"
            :subTitle="'Please select a delivery address.'"
            @switchTab="switchTab"
            @proceed="goToStep3"
          />
        </div>
      </v-stepper-content>
      
      <!-- #3 -->
      <v-stepper-content step="3">
        <div class="d-flex flex-column">
          <strong>Payment Method.</strong>
          <small>Please select you payment method.</small>
        </div>
        <div>
          <div>Selected Address here</div>
        </div>
        <v-btn color="primary" @click="tab = 1">
          Place Order
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import savedAddress from '../components/saved-address.component';
import orderCard from '../components/order-card.component';

export default {
  components: {
    savedAddress,
    orderCard
  },
  data: () => ({
    tab: 1,
  }),
  computed: {
    cartItems() {
      return this.$store.getters['cart/getCartItems'];
    },
    cartTotal() {
      let total = 0;
      this.$store.getters['cart/getCartItems'].forEach((item) => {
        total = total + (item.orderQuantity * item.bestPrice)
      });
      return total;
    }
  },
  methods: {
    switchTab(val) {
      this.$router.push({ path: '/address', query: { tab: val } });
    },
    goBack() {
      if (this.tab > 1) {
        this.tab--;
      }
    },
    goToStep3(selectedAddress) {
      if (this.tab === 2) {
        console.log(selectedAddress);
        this.tab++;
      }
    },
    getCart() {
      this.$store.dispatch('cart/getCart');
    },
    getAddresses() {
      this.$store.dispatch('address/getAddress');
    }
  },
  mounted() {
    this.getCart();
    this.getAddresses();
  },
}
</script>

<style>

</style>