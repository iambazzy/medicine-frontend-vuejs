<template>
  <div class="home">
    <primary-carousel/>
    <upload-prescription/>
    <categories/>
    <product-slider :heading="'Frequently Brought'" :products="15"/>
    <product-slider :heading="'Trending'" :products="5"/>
    <advertise/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    primaryCarousel:() => import('../components/primary-carousel.component.vue'),
    categories: () => import('../components/categories.component'),
    uploadPrescription: () => import('../components/upload-prescription.component'),
    productSlider: () => import('../components/product-slider.component'),
    advertise: () => import('../components/advertise.component')
  }
}
</script>
