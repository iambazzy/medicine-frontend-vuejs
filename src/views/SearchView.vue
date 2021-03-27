<template>
  <div>
    <medicine-card 
      v-for="(medicine, index) in medicines" 
      :key="index"
      :product="medicine"
    />
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
      return this.$store.getters['pharmacy/getMedicines']
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