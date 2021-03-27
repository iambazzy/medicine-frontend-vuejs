<template>
  <div>
    <div v-if="medicines.length > 0">
      <medicine-card 
        v-for="(medicine, index) in medicines" 
        :key="index"
        :product="medicine"
      />
      <div class="mt-4 d-flex justify-center" v-if="showSeeMore">
        <v-btn text small outlined color="primary" @click="$store.dispatch('pharmacy/getMedicines')"> 
          <strong> See More </strong>
        </v-btn>
      </div>
    </div>
    <div v-else class="d-flex justify-center flex-column align-center mt-16">
      <v-icon x-large color="error"> highlight_off </v-icon>
      <h3>Sorry No Results Found</h3>
      <v-card elevation="0" outlined class="px-6 py-6 d-flex flex-column align-center justify-center mt-6" style="width: 90%">
        <small> Should we stock <strong> {{ searchedMedicine }} </strong> ? </small>
        <v-btn small class="mt-6" block color="primary" @click="stockMedicine">Send Request To Stock</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
import medicineCard from '../components/medicine-card.component';
import pharmacyModule from '../store/pharmacy';

export default {
  components: {
    medicineCard
  },
  computed: {
    medicines() {
      return this.$store.getters['pharmacy/getMedicines'];
    },
    showSeeMore() {
      return this.$store.getters['pharmacy/seeMore'];
    },
    searchedMedicine() {
      return this.$store.getters['pharmacy/searchedMedicine'];
    }
  },
  methods: {
    getMedicines() {
      if (this.medicines.length === 0) {
        this.$store.dispatch('pharmacy/getMedicines');
      }
    },
    initializeModule() {
      this.$store.registerModule('pharmacy', pharmacyModule);
    },
    stockMedicine() {

    }
  },
  async created() {
    await this.initializeModule();
  },
  mounted() {  
    this.getMedicines();
  },
  beforeDestroy () {
    this.$store.unregisterModule('pharmacy');
  }
}
</script>