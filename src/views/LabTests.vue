<template>
  <div>
    <!-- TOP HEADING -->
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex align-center">
        <h3>Book Lab Tests</h3>
      </div>
      <div>
        <span style="cursor: pointer" @click="showInfoModal = !showInfoModal">
          <v-icon  color="primary">info</v-icon>
        </span>
      </div>
    </div>

    <!-- ADDED -->
    <div class="d-flex justify-end mb-4">
      <v-btn color="primary" small @click="showBottomSheet = !showBottomSheet">
        Added <v-chip x-small color="white" class="ml-3">0</v-chip>
      </v-btn>
    </div>

    <!-- CARD FOR TEST -->
    <test-card v-for="(test, index) in tests" :key="index">
      <template v-slot:add-button>
        <v-btn elevation="2" small dark color="primary">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
    </test-card>

    <!-- HOW IT WORKS -->
    <info-modal :color="'primary'" v-if="showInfoModal">
      <template v-slot:heading>
        <strong>How it Works</strong>
      </template>
      <template v-slot:body>
        <div>collect sample etc....</div>
      </template>
    </info-modal>

    <!-- ADDED BOTTOM SHEET -->
    <sheet v-if="showBottomSheet">
      
    </sheet>
  </div>
</template>

<script>
import testCard from '../components/test-card.component';
export default {
  components: {
    infoModal: () => import('../components/info-modal.component.vue'),
    sheet: () => import('../components/bottom-dialog.component'),
    testCard,
  },
  data: () => ({
    tests: 10
  })
}
</script>

<style>

</style>