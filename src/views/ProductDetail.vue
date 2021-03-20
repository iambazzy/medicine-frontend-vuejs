<template>
  <div>
    <h2 class="mb-0 pb-0">Product Name</h2>
    <v-chip x-small label color="primary" class="mb-6 pa-2"> Company Name </v-chip>
    <v-card elevation="0" class="pa-4">
      <!-- MEDCINE IMAGE -->
      <div class="d-flex justify-center">
        <v-img  max-height="200" max-width="80%" src="https://www.netmeds.com/images/product-v1/600x600/26980/calcirol_60000iu_granules_1gm_0.jpg" lazy-src="https://picsum.photos/id/11/10/6"></v-img>
      </div>
      <div class="d-flex mt-4 flex-column">
        <div class="d-flex align-center justify-space-between mb-3">
          <div class="d-flex flex-column justify-center align-center"> 
            <strong>MRP</strong> 
            <v-chip label color="error" dark> 
              <span class="discount"> {{ ruppeeSymbol }} 500 </span>
            </v-chip>
          </div>
          <div class="d-flex flex-column justify-center align-center"> 
            <strong>Our Price</strong> 
            <v-chip label color="green" dark> 
              <span> {{ ruppeeSymbol }} 330 </span>
            </v-chip>
          </div>
        </div>
        <div class="d-flex justify-space-between align-center mt-3"> 
          <div style="font-size: 16px;">Quantity</div>
          <div>
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
      <!-- PRICE DETAILS -->
      <div>
        
      </div>
      <!-- ADD TO CART -->
      <div class="mt-8 d-flex justify-space-between align-center">
        <small>*Inclusive of all taxes</small>
        <v-btn small color="primary">Add To Cart</v-btn>
      </div>

      <!-- EXPANSION PANELS -->
      <hr class="mt-4 gray"/>
      <div class="mt-6">
        <h3>Details</h3>
        <v-expansion-panels class="mt-4">
          <v-expansion-panel v-for="(item,i) in 2" :key="i" >
            <v-expansion-panel-header>
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content class="justified">
              Keep out of the reach of children
              Do not use after expiry date
              Store at room temperature 15ºC to 25ºC
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
export default {
  data: () => ({
    ruppeeSymbol: '₹'
  })
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
</style>