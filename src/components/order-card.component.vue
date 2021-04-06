<template>
  <v-card elevation="2" class="pa-4 my-3 mx-1">
    <div class="d-flex align-center">
      <div>IMAGE</div>
      <div class="d-flex flex-column ml-4" style="width: 100%">
        <div>
          <strong style="text-transform: capitalize">{{ data.name }}</strong>
        </div>
        <div v-if="hideBtns">₹{{ data.bestPrice }}</div>
        <div v-if="!hideBtns" >₹{{ data.bestPrice * data.orderQuantity }} - ({{ data.orderQuantity }} Items)</div>
        <div class="d-flex justify-space-between align-center mt-4" v-if="hideBtns">
          <div>
            Quantity
          </div>
          <div>
            <!-- REMOVE -->
              <v-btn x-small outlined color="error" @click="subtract(data)">
                <v-icon small>remove</v-icon>
              </v-btn>

            <!-- QUANTITY -->
              <strong class="px-4">{{ data.orderQuantity }}</strong>

            <!-- ADD -->
              <v-btn x-small outlined color="green" @click="add(data)">
                <v-icon small>add</v-icon>
              </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-end mt-4" v-if="hideBtns">
      <v-btn small outlined class="mt-4" color="error" dark @click="removeProduct(data)">
        <strong>Remove from cart</strong>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    hideBtns: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    removeProduct(data) {
      this.$store.dispatch('cart/removeFromCart', data._id);
    },
    subtract(data) {
      if (data.orderQuantity > 1) {
        data.orderQuantity--;
        const template = {
          orderQuantity: data.orderQuantity,
          product: data
        };
        this.$store.commit('startLoading', null, { root: true });
        setTimeout(() => {
          this.$store.dispatch('cart/addToCart', template);
        }, 2000);
      }
    },
    add(data) {
      if (data.orderQuantity < data.quantity) {
        data.orderQuantity++;
        const template = {
          orderQuantity: data.orderQuantity,
          product: data
        };
        this.$store.commit('startLoading', null, { root: true });
        setTimeout(() => {
          this.$store.dispatch('cart/addToCart', template);
        }, 2000);
      }
    }
  }
}
</script>