<template>
  <div>
    <medicine-card 
      v-for="(medicine, index) in medicines" 
      :key="index" 
    />
    <product-slider :heading="'Recent Searches'" :products="10"/>
    <advertise/>
  </div>
</template>

<script>
export default {
  components: {
    medicineCard: () => import('../components/medicine-card.component'),
    productSlider: () => import('../components/product-slider.component'),
    advertise: () => import('../components/advertise.component')
  },
  data: () => ({
    medicines: 15
  })

}
</script>

<style>

</style>