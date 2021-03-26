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
    }
  },
  mounted() {
    this.getMedicines();
  }
}
</script>