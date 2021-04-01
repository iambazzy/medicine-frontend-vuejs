<template>
  <div class="mt-3 d-flex flex-column">
    <strong>{{ isEditing ? editMssg : addMssg }}</strong>
    <small>{{ isEditing ? checkoutMssgEdit : checkoutMssgAdd }}</small>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field v-model="firstname" :rules="firstNameRules" outlined dense label="Firstname" required class="mb-1"></v-text-field>
      <v-text-field v-model="lastname" :rules="lastNameRules" outlined dense label="Lastname" required class="mb-1"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" outlined dense label="E-mail" required class="mb-1"></v-text-field>
      <v-text-field v-model="phone" :rules="phoneRules" outlined dense label="Mobile Number" type="number" required class="mb-1"></v-text-field>
      <!-- <v-text-field v-model="street" :rules="streetRules" outlined dense label="Street / House No." required class="mb-1"></v-text-field> -->
      <v-textarea
        outlined
        dense
        :rules="streetRules"
        label="Street / House Address / H.no"
        v-model="street"
        class="mb-1"
        required
        rows="3"
        no-resize
      ></v-textarea>
      <v-text-field v-model="landmark" :rules="landmarkRules" outlined dense label="Landmark" required class="mb-1"></v-text-field>
      <v-text-field v-model="pincode" :rules="pincodeRules" outlined dense label="Pincode" required class="mb-1"></v-text-field>
      <v-btn class="mt-4" :disabled="!valid" color="primary" @click="validate" block> 
        <strong>{{ isEditing ? btnTextEdit : btnTextAdd }}</strong>
      </v-btn>  
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    addMssg: 'Add Address.',
    editMssg: 'Edit Address.',
    checkoutMssgAdd: 'Enter address for faster checkouts.',
    checkoutMssgEdit: 'Update your saved address.',
    btnTextAdd: 'ADD ADDRESS',
    btnTextEdit: 'SAVE',
    valid: true,
    firstname:'',
    lastname: '',
    email: '',
    phone:'',
    street: '',
    landmark: '',
    pincode: '',
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
      v => !!v || 'This will be used to send updates',
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
    ],
    streetRules: [
      v => !!v || 'Street will help us find you.',
      v => v.length < 150|| 'Street to be less than 150 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters or Enter Is Not Allowed'
    ],
    landmarkRules: [
      v => !!v || 'Landmark will help us find you.',
      v => v.length < 15 || 'Landmark to be less than 25 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    pincodeRules: [
      v => !!v || 'Pincode will help us find you.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
  }),
  computed: {
    editAddress() {
      return this.$store.getters['address/getEditAddress'];
    },
    isEditing() {
      return this.$store.getters['address/isEditingAddress'];
    }
  },
  methods: {
    setForm() {
      if (this.editAddress.hasOwnProperty('_id')) {
        this.firstname = this.editAddress['firstname'];
        this.lastname = this.editAddress['lastname'];
        this.email = this.editAddress['email'];
        this.phone = this.editAddress['phone'];
        this.street = this.editAddress['street'];
        this.pincode = this.editAddress['pincode'];
        this.landmark = this.editAddress['landmark'];
      }
    },
    validate () {
      this.$refs.form.validate();
      const formData = {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "phone": this.phone,
        "street": this.street,
        "pincode": this.pincode,
        "landmark": this.landmark
      };
      if (this.$refs.form.validate() && this.isEditing) {
        this.$store.dispatch('address/editAddress', { id: this.editAddress._id ,data:formData})
        .then((resp) => {
          if (resp) {
            this.$store.dispatch('address/getAddress');
          }
          this.$emit('switchTab', 'tab-1');
        });
        return;
      } 
      if (this.$refs.form.validate()) {
        this.$store.dispatch('address/saveAddress', formData)
        .then((resp) => {
          if (resp.code === 200) {
            this.$store.dispatch('address/getAddress');
          }
          this.$emit('switchTab', 'tab-1');
        });
      }
    }
  },
  mounted() {
    this.setForm();
  },
  beforeDestroy() {
    if (this.isEditing) {
      this.$store.commit('address/setEditAddress', {});
    }
    this.$store.commit('address/setEditing', false);  
  }
}
</script>

<style>

</style>