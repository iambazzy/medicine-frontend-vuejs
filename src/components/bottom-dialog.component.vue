<template>
  <v-bottom-sheet v-model="sheet">
    <v-sheet class="text-center" height="300px">
      <v-btn class="mt-2" text color="error" @click="sheet = !sheet">
        close
      </v-btn>
      <div class="my-3">
        <slot name="body"></slot>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  data: () => ({
    sheet: false
  }), 
  methods: {
    toggleSheet() {
      this.sheet = !this.sheet;
    }
  }
}
</script>

<style>

</style>