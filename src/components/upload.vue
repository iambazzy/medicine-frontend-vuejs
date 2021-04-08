<template>
  <div>
    <v-file-input
      v-model="files"
      counter
      label="Click Here To Upload"
      placeholder="Click Here To Upload"
      outlined
      prepend-icon="upload"
      dense
      :rules="rules"
      accept="image/png, image/jpeg"
      show-size
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
    <v-btn class="mt-6" block outlined color="primary" @click="upload()">Upload</v-btn>
  </div>
</template>

<script>
export default {
  data:() =>({
    files:[],
    rules: [
      value => !value || value.size < 1000000 || 'Size should be less than 1 MB!',
    ],
  }),
  methods: {
    upload() {
      console.log(this.files);
    }
  }
}
</script>