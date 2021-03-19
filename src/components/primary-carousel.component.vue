<template>
  <v-carousel cycle height="200" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%" color="lightgray">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data:() => ({
    slides: 4
  })
}
</script>

<style>

</style>