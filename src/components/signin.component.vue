<template>
  <div class="mt-3 d-flex flex-column">
    <strong>Log In To Your Account.</strong>
    <small>Please enter email and password to login.</small>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field v-model="email" :rules="emailRules" outlined dense label="E-mail" required class="mb-4"></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" required type="password" label="Password" dense outlined ></v-text-field>
      <div class="d-flex justify-end">
        <v-btn class="pa-0" x-small text>
          <strong>Forgot Password?</strong>
        </v-btn>
      </div>
      <v-btn class="mt-10" :disabled="!valid" color="primary" @click="validate" block> 
        <strong> SIGN IN </strong>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required.',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
      v => v.length < 30 || 'Email to be less than 30 characters.'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required.',
    ]
  }),

  methods: {
    validate () {
      this.$refs.form.validate();
      const formData = {
        "email": this.email,
        "password": this.password
      }
      this.$emit('login', formData);
    }
  }
}
</script>

<style>

</style>