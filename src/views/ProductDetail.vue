<template>
  <div>
    <h2 class="mb-0 pb-0 medicine-name">{{ productDetail.name }}</h2>
    <v-chip x-small label color="primary" class="mb-6 pa-2"> {{ productDetail.company }} </v-chip>
    <v-card elevation="0" class="pa-4">
      <!-- MEDCINE IMAGE -->
      <div class="d-flex justify-center">
        <v-img  max-height="200" max-width="80%" src="https://www.netmeds.com/images/product-v1/600x600/26980/calcirol_60000iu_granules_1gm_0.jpg" lazy-src="https://picsum.photos/id/11/10/6"></v-img>
      </div>
      <div class="d-flex mt-4 flex-column">
        <div class="d-flex align-center justify-space-between mb-3">
          <div class="d-flex flex-column justify-center align-center"> 
            <strong> MRP </strong> 
            <v-chip label color="error" dark> 
              <span class="discount"> {{ ruppeeSymbol }} {{ productDetail.mrp}} </span>
            </v-chip>
          </div>
          <div class="d-flex flex-column justify-center align-center"> 
            <strong>Our Price</strong> 
            <v-chip label color="green" dark> 
              <span> {{ ruppeeSymbol }} {{ productDetail.bestPrice }} </span>
            </v-chip>
          </div>
        </div>
        <div class="d-flex justify-space-between align-center mt-3"> 
          <div style="font-size: 16px;">Quantity</div>
          <div>
            <!-- REMOVE -->
            <v-btn x-small outlined color="error" @click="$store.commit('productDetails/setOrderQuantity', { choice: 'subtract' })">
              <v-icon small>remove</v-icon>
            </v-btn>
            <!-- QUANTITY -->
            <strong class="px-4">{{ orderQuantity }}</strong>
            <!-- ADD -->
            <v-btn x-small outlined color="green" @click="$store.commit('productDetails/setOrderQuantity', { choice: 'add' })">
              <v-icon small>add</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- PRICE DETAILS -->
      <div class="mt-2 d-flex justify-end">
        <small> <strong>In stock : {{ productDetail.quantity }}</strong></small>
      </div>
      <!-- ADD TO CART -->
      <div class="mt-8 d-flex justify-space-between align-center">
        <small>*Inclusive of all taxes</small>
        <v-btn small color="primary" @click="addToCart">Add To Cart</v-btn>
      </div>

      <!-- EXPANSION PANELS -->
      <hr class="mt-4 gray"/>
      <div class="mt-6">
        <h3>Information</h3>
        <v-expansion-panels class="mt-4">
          <v-expansion-panel >
            <v-expansion-panel-header key="1">
              Description
            </v-expansion-panel-header>
            <v-expansion-panel-content class="justified">
              <strong>Composition</strong>
              <div>{{ productDetail.composition }}</div>
              <strong>Description</strong>
              <div>{{ productDetail.description }}</div>
              <strong>Precautions</strong>
              <div> 
                Keep out of the reach of children
                Do not use after expiry date
                Store at room temperature 15ºC to 25ºC 
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <!-- DISCLAIMER -->
      <div class="mt-6">
        <h3>Disclaimer</h3>
        <div class="mt-2 justified">
          The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import productDetailsModule from '../store/product-details';

export default {
  data: () => ({
    ruppeeSymbol: '₹'
  }),
  computed: {
    productDetail() {
      return this.$store.getters['productDetails/getProductDetails'];
    },
    orderQuantity() {
      return this.$store.getters['productDetails/getOrderQuantity'];
    }
  },
  methods: {
    initializeModule() {
      this.$store.registerModule('productDetails', productDetailsModule);
    },
    addToCart() {
      const template = {
        orderQuantity: this.orderQuantity,
        product: this.productDetail
      };
      console.log(template);
    },
    getProductDetails() {
      this.$store.commit('productDetails/setDefaultOrderQuantity');
      this.$store.dispatch('productDetails/getProductDetails', { id: this.$route.query.id });
    }
  },
  async created() {
    await this.initializeModule();
  },
  mounted() {
    this.getProductDetails();
  },
  beforeDestroy () {
    this.$store.unregisterModule('productDetails');
  }
}
</script>

<style scoped>
  .discount {
    /* font-weight: bold; */
    text-decoration: line-through;
  }
  .justified {
    text-align: justify;
    font-size: 12px;
  }
  .medicine-name {
    text-transform: capitalize;
  }
</style>