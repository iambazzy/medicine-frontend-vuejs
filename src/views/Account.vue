<template>
  <v-card>
    <v-tabs v-model="tab" grow>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1"> Sign In </v-tab>
      <v-tab href="#tab-2"> Sign Up </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat class="pa-4">
          <div v-if="tab === 'tab-1'">
            <signin/>
          </div>
          <div v-if="tab === 'tab-2'">
            <signup/>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  components: {
    signin: () => import('../components/signin.component'),
    signup: () => import('../components/signup.component')
  },
  data: () => ({
    tab: null,
    headingMssg: 'Login to your account'
  })
}
</script>

<style>

</style>