<template>
  <v-card 
    class="pa-6 d-flex justify-space-between align-center" 
    elevation="0"
    ripple
    @click="uploadPrescription"
  >
    <strong>Upload Prescription</strong>
    <v-icon x-large color="primary">description</v-icon>

    <!-- UPLOADER -->
    <info-modal :color="'primary'" ref="modal" :showActionButtons="false">
      <template v-slot:heading>
        <strong>Upload Prescription</strong>
      </template>
      <template v-slot:body>
        <uploader/> 
      </template>
    </info-modal>
  </v-card>
</template>

<script>
export default {
  components: {
    uploader: () => import('../components/upload'),
    infoModal: () => import('../components/info-modal.component.vue'),
  },
  data: () => ({
  }),
  computed: {
    loggedIn() {
      return this.$store.getters['account/loggedIn'];
    }
  },
  methods: {
    uploadPrescription() {
      if (this.loggedIn) {
        this.$refs.modal.toggleDialog();
      } else {
        this.$router.push({ path: '/account' });
      }
    }
  }
}
</script>

<style>

</style>