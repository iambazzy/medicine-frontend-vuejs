<template>
  <div>
    <medicine-card 
      v-for="(medicine, index) in medicines" 
      :key="index" 
    />
  </div>
</template>

<script>
export default {
  components: {
    medicineCard: () => import('../components/medicine-card.component'),
  },
  data: () => ({
    medicines: 15
  })

}
</script>

<style>

</style>