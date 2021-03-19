<template>
  <v-row class="mt-2">
    <v-col cols="6" v-for="(item, index) in categories" :key="index">
      <v-card class="py-4 d-flex flex-column" elevation="0" ripple >
        <div class="d-flex justify-center">
          <v-icon x-large color="black">{{ item.icon }}</v-icon>
          </div>
        <div class="d-flex justify-center mt-3">
          <strong>{{ item.label }}</strong>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    categories: [ 
      { 
        label: 'Buy Medicines',
        icon: 'bloodtype'
      },
      { 
        label: 'Book Lab Tests',
        icon: 'biotech'
      },
    ]
  })
}
</script>

<style>

</style>