<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:default="dialog">
      <v-card class="pa-0">
        <v-toolbar :color="color" dark>
          <slot name="heading"></slot>
        </v-toolbar>
        <v-card-text class="pa-2">
          <div class="pt-6">
            <slot name="body"></slot>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end" v-if="showActionButtons">
          <v-btn text small color="error" @click="dialog.value = false">
            <strong>Close</strong>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    showActionButtons: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    }
  }
}
</script>

<style>

</style>