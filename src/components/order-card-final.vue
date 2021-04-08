<template>
  <v-card elevation="4" class="my-6 pa-2 d-flex flex-column">
    <small>
      <strong>Ordered On : {{ getDate(data.createdAt.slice(0,10)) }}</strong>
    </small>
    <div class="d-flex justify-space-between align-center mt-4">
      <small>
        <strong>#{{ data._id }}</strong>
      </small>
      <small>
        <strong :class="`${statusColor}--text`">{{ data.status }}</strong>
      </small>
    </div>
    <v-card elevation="0" outlined class="pa-2 gray mt-4 d-flex flex-column">
      <h3>Delivery Address</h3>
      <small>{{ data.address.firstname }} {{ data.address.lastname }}</small>
      <small>{{ data.address.street }} - {{ data.address.landmark }}</small>
      <small>{{ data.address.pincode }}</small>
      <small>{{ data.address.phone }}</small>
      <small>{{ data.address.email }}</small>
    </v-card>
    <div class="d-flex justify-end mt-4">
      <v-btn small outlined color="primary" @click="viewDetails">
        View Details
        <v-icon small class="ml-1">chevron_right</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { formatDate } from '../helpers/helpers';

export default {
  props: ['data'],
  computed: {
    statusColor() {
      if (this.data.status.toLowerCase().trim() === 'pending') {
        return 'red'
      }
    },
    getDate() {
      return (str) => {
        return formatDate(str);
      }
    }
  },
  methods: {
    viewDetails() {
      this.$router.push({ path: '/order-details', query: { id: this.data._id } })
    }
  }
}
</script>

<style>

</style>