<template>
  <div class="mt-3 d-flex flex-column">
    <strong>Create Your Account.</strong>
    <small>Enter details below to create your account.</small>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field v-model="firstname" :rules="firstNameRules" outlined dense label="Firstname" required class="mb-2"></v-text-field>
      <v-text-field v-model="lastname" :rules="lastNameRules" outlined dense label="Lastname" required class="mb-2"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" outlined dense label="E-mail" required class="mb-2"></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" required type="password" label="Password" class="mb-2" dense outlined ></v-text-field>
      <v-text-field v-model="phone" :rules="phoneRules" outlined dense label="Mobile Number" type="number" required class="mb-2"></v-text-field>
      <v-btn class="mt-4" :disabled="!valid" color="primary" @click="validate" block> 
        <strong> SIGN UP </strong>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    firstname:'',
    lastname: '',
    email: '',
    password: '',
    phone:'',
    firstNameRules: [
      v => !!v || 'Firstname is required.',
      v => v.length < 15 || 'Firstname to be less than 15 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    lastNameRules: [
      v => !!v || 'Lastname is required.',
      v => v.length < 15 || 'Lastname to be less than 15 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    emailRules: [
      v => !!v || 'E-mail is required.',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
      v => v.length < 30 || 'Email to be less than 30 characters.'
    ],
    passwordRules: [
      v => !!v || 'Password is required.',
      v => v.length > 8 || 'Password to be atleast 8 characters long.',
      v => v.length < 15 || 'Password to not exceed 15 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    phoneRules: [
      v => !!v || 'Mobile number will be used to contact you.',
      v => v.length === 10 || 'Enter Valid Phone Number - 10 digits.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ]
  }),
  methods: {
    validate () {
      this.$refs.form.validate();
      const formData = {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "password": this.password,
        "phone": this.phone
      };
      console.log(formData);
    }
  }
}
</script>

<style>

</style>