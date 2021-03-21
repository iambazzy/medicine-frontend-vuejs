<template>
  <div>
    <medicine-card 
      v-for="(medicine, index) in medicines" 
      :key="index" 
    />
  </div>
</template>

<script>
import medicineCard from '../components/medicine-card.component';

export default {
  components: {
    medicineCard
  },
  data: () => ({
    medicines: 15
  })

}
</script>

<style>

</style>