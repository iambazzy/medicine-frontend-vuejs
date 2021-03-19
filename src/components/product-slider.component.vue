<template>
  <v-card class="mt-4 mb-6 pa-2" elevation="0">
    <h4 class="mb-2">{{ heading }}</h4>
    <v-slide-group v-model="model" active-class="success" :show-arrows="$vuetify.breakpoint.width > 1000">
      <v-slide-item v-for="n in products" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? undefined : 'white'"
          class="ma-2"
          height="200"
          width="200"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
export default {
  props: {
    products: {
      type: Number
    },
    heading: {
      type: String
    }
  },
  data: () => ({
    model: ''
  })
}
</script>

<style>

</style>