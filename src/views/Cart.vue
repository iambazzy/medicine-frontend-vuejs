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
            <div class="d-flex flex-column">
              <div class="d-flex justify-space-between" v-if="cartItems.length > 0">
                <div>{{ cartItems.length }} items</div>
                <div>
                  <v-chip small color="green" dark> 
                    <strong> You Save ₹{{ originalTotal - cartTotal }} </strong>
                  </v-chip>
                </div>
              </div>
                <div v-if="cartItems.length > 0">Original Total: <span class="discount">₹{{ originalTotal }}</span>  </div>
                <div v-if="cartItems.length > 0">You pay: <strong>₹{{ cartTotal }} </strong> </div>
              </div>
            </div>
            <div class="d-flex flex-column mt-4 mb-4">
              <order-card 
                v-for="(item, index) in cartItems" 
                :key="index"
                :data="item"
              />
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
        <div style="padding: 1px;">
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
          <strong>Place Order.</strong>
          <small>Please review your order.</small>
        </div>
        <div style="padding: 1px;">
          <div class="mt-3">
            <strong>Delivery Address</strong>
          </div>
          <v-card elevation="2" class="pa-2 mb-2 mt-2" >
            <div class="d-flex flex-column">
              <strong style="text-transform: capitalize;">{{ selectedAddress.firstname }} {{ selectedAddress.lastname }}</strong>
              <small>{{ selectedAddress.email }}</small>
              <small>{{ selectedAddress.street }} - {{ selectedAddress.landmark }}</small>
              <small>{{ selectedAddress.phone }}</small>
              <small>{{ selectedAddress.pincode }}</small>
            </div>
          </v-card>
        </div>

        <div>
          <div class="mt-3 d-flex justify-space-between">
            <strong>Order Details</strong>
            <div v-if="cartItems.length > 0">You pay: <strong>₹{{ cartTotal }} </strong> </div>
          </div>
          <order-card 
            v-for="(item, index) in cartItems" 
            :key="index"
            :data="item"
            :hideBtns="false"
          />
        </div>

        <v-btn color="primary" block class="mt-6" @click="$refs.modal.toggleDialog()">
          Place Order
        </v-btn>

        <!-- HOW IT WORKS -->
        <info-modal :color="'primary'" ref="modal" :showActionButtons="false">
          <template v-slot:heading>
            <strong>
              <v-icon color="white">info</v-icon>
              Note
            </strong>
          </template>
          <template v-slot:body>
            <div>
              All our orders are processed on COD (Cash on Delivery) payment method.
            </div>
            <div class="mt-6 d-flex justify-end">
              <v-btn color="primary" small @click="$refs.modal.toggleDialog()">
                Go Back
              </v-btn>
              <v-btn color="primary" class="ml-4" small @click="placeOrder()">Place Order</v-btn>
            </div>
          </template>
        </info-modal>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import savedAddress from '../components/saved-address.component';
import orderCard from '../components/order-card.component';

export default {
  components: {
    infoModal: () => import('../components/info-modal.component.vue'),
    savedAddress,
    orderCard
  },
  data: () => ({
    tab: 1,
    checkbox: true
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
    },
    originalTotal() {
      let originalTotal = 0;
      this.$store.getters['cart/getCartItems'].forEach((item) => {
        originalTotal = originalTotal + (item.orderQuantity * item.mrp)
      });
      return originalTotal;
    },
    selectedAddress() {
      return this.$store.getters['cart/getSelectedAddress'];
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
        this.$store.commit('cart/setSelectedAddress', selectedAddress);
        this.tab++;
      }
    },
    getCart() {
      this.$store.dispatch('cart/getCart');
    },
    getAddresses() {
      this.$store.dispatch('address/getAddress');
    },
    placeOrder() {
      this.$refs.modal.toggleDialog();
      // this.$store.commit('startLoading');
      const template = {
        address: this.selectedAddress,
        products: this.cartItems
      }
      this.$store.dispatch('orders/placeOrder', template);
      // this.$router.push({ path: '/placed' });
    }
  },
  mounted() {
    this.getCart();
    this.getAddresses();
  },
}
</script>

<style scoped>
  .discount {
    text-decoration: line-through;
  }
</style>