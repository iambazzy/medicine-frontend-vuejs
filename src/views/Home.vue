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
import primaryCarousel from '../components/primary-carousel.component.vue';
import categories from '../components/categories.component';
import uploadPrescription from '../components/upload-prescription.component';
import productSlider from '../components/product-slider.component';
import advertise from '../components/advertise.component';

export default {
  name: 'Home',
  components: {
    primaryCarousel,
    categories,
    uploadPrescription,
    productSlider,
    advertise
  },
}
</script>
