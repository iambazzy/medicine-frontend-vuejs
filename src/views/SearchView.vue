<template>
  <div>
    <div v-if="medicines.length > 0">
      <medicine-card 
        v-for="(medicine, index) in medicines" 
        :key="index"
        :product="medicine"
      />
      <div class="mt-4 d-flex justify-center" v-if="showSeeMore">
        <v-btn text small outlined color="primary" @click="$store.dispatch('pharmacy/getMedicines')"> 
          <strong> See More </strong>
        </v-btn>
      </div>
    </div>
    <div v-else class="d-flex justify-center flex-column align-center mt-16">
      <v-icon x-large color="error"> highlight_off </v-icon>
      <h3>Sorry No Results Found</h3>
      <v-card elevation="0" outlined class="px-6 py-6 d-flex flex-column align-center justify-center mt-6" style="width: 90%">
        <small> Should we stock <strong> {{ searchedMedicine }} </strong> ? </small>
        <v-btn small class="mt-6" block color="primary" @click="$refs.modal.toggleDialog()">Send Request To Stock</v-btn>
      </v-card>
    </div>
    <info-modal :color="'primary'" :showActionButtons="false" ref="modal">
      <template v-slot:heading>
        <strong>Request a product</strong>
      </template>
      <template v-slot:body>
        <div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field :rules="nameRules" v-model="name" label="Name" outlined dense required></v-text-field>
            <v-text-field :rules="numberRules" v-model="number" type="number" label="Mobile number" outlined dense required></v-text-field>
            <v-text-field :rules="productNameRules" v-model="productName" label="Product Name" outlined dense required></v-text-field>
            <div class="mt-8 d-flex justify-end">
              <v-btn text color="error" small @click="$refs.modal.toggleDialog()" class="mr-2">
                <strong>cancel</strong>
              </v-btn>
              <v-btn text color="primary" small @click="stockMedicine()">
                <strong>send request</strong>
              </v-btn>
            </div>
          </v-form>
        </div>
      </template>
    </info-modal>
  </div>
</template>

<script>
import medicineCard from '../components/medicine-card.component';
import pharmacyModule from '../store/pharmacy';
import infoModal from '../components/info-modal.component';

export default {
  components: {
    medicineCard,
    infoModal
  },
  data: () => ({
    valid: true,
    name: '',
    number: '',
    productName: '',
    nameRules: [
      v => !!v || 'Name is required.',
      v => v.length < 15 || 'Name to be less than 15 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    numberRules: [
      v => !!v || 'Mobile number will be used to contact you.',
      v => v.length === 10 || 'Enter Valid Phone Number - 10 digits.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
    productNameRules: [
      v => !!v || 'Product Name is required.',
      v => v.length < 100 || 'Product Name to be less than 100 characters.',
      v => /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/.test(v) || 'Special Characters Are Not Allowed'
    ],
  }),
  computed: {
    medicines() {
      return this.$store.getters['pharmacy/getMedicines'];
    },
    showSeeMore() {
      return this.$store.getters['pharmacy/seeMore'];
    },
    searchedMedicine() {
      return this.$store.getters['pharmacy/searchedMedicine'];
    }
  },
  methods: {
    getMedicines() {
      if (this.medicines.length === 0) {
        this.$store.dispatch('pharmacy/getMedicines');
      }
    },
    initializeModule() {
      this.$store.registerModule('pharmacy', pharmacyModule);
    },
    stockMedicine() {
      if (this.$refs.form.validate()) {
        this.$refs.modal.toggleDialog();
      }
    }
  },
  async created() {
    await this.initializeModule();
  },
  mounted() {  
    this.getMedicines();
  },
  beforeDestroy () {
    this.$store.unregisterModule('pharmacy');
  }
}
</script>