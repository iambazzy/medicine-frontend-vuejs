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
            <signin @login="login"/>
          </div>
          <div v-if="tab === 'tab-2'">
            <signup @signup="signup"/>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import signin from '../components/signin.component';
import signup from '../components/signup.component';

export default {
  components: {
    signin, 
    signup 
  },
  data: () => ({
    tab: null,
    headingMssg: 'Login to your account'
  }),
  methods: {
    login(data) {
      this.$store.dispatch('account/login', data).then((data) => {
        if (data) {
          this.$router.push({ path: '/profile' });
          this.$store.commit('showSnackbar', { color: 'success', message: data.message });
        }
      });
    },
    signup(data) {
      console.log(data);
    }
  },
  mounted() {

  },
}
</script>

<style>

</style>