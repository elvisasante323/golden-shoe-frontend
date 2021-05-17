<template>
  <div id="register" class="mt-5">
    <b-container v-if="reportError">
      <b-row>
        <b-col offset="3" sm="6">
          <b-alert show variant="danger">
            <b-list-group-item>Please check  all fields again!</b-list-group-item>
            <b-list-group-item>
              First name, last name , address, postcode, password and confirm password should be strings
            </b-list-group-item>
          </b-alert>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="loader">
      <b-row>
        <b-col sm="12">
          <b-img
              center
              :src="require('../assets/loader.gif')"
              width="527"
              height="445"
              alt="Logo">
          </b-img>

          <p class="text-center">
            Registering your details.....
          </p>
        </b-col>
      </b-row>
    </b-container>

    <h1 class="text-center" v-if="!loader">
      Register as a customer
    </h1>

    <b-container v-if="!loader">
      <b-form>
        <b-row>
          <b-col sm="6">
            <b-form-group
                id="firstName"
                label="First name"
                label-for="firstName"
            >
              <b-form-input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  @blur.native="validateText(form.firstName)"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="6 mt-3">
            <b-form-group
                id="lastName"
                label="Last name"
                label-for="lastName"
            >
              <b-form-input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  @blur.native="validateText(form.firstName)"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6 mt-3">
            <b-form-group
                id="mobileNumber"
                label="Mobile number"
                label-for="mobileNumber"
            >
              <b-form-input
                  id="mobileNumber"
                  v-model="form.mobileNumber"
                  type="number"
                  placeholder="Enter your mobile number"
                  required
                  @blur.native="validateNumbers(form.moblieNumber)"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="6 mt-3">
            <b-form-group
                id="email"
                label="Email"
                label-for="email"
            >
              <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  @blur.native="validateEmail(form.email)"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6 mt-3">
            <label for="dateOfBirth">Date of birth: </label>
            <b-form-datepicker
                id="dateOfBirth"
                v-model="form.dateOfBirth"
                @blur.native="validateText(form.dateOfBirth)"
                class="mb-2"></b-form-datepicker>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6 mt-3">
            <b-form-group
                id="address"
                label="Address"
                label-for="address"
            >
              <b-form-input
                  id="address"
                  v-model="form.address"
                  type="text"
                  placeholder="Enter the first line of address"
                  required
                  @blur.native="validateText(form.address)"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6 mt-3">
            <b-form-group
                id="postcode"
                label="Postcode"
                label-for="postcode"
            >
              <b-form-input
                  id="postcode"
                  v-model="form.postcode"
                  type="text"
                  placeholder="Enter your postcode"
                  required
                  @blur.native="validateText(form.postcode)"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6 mt-3">
            <b-form-group
                id="password"
                label="Password"
                label-for="password"
            >
              <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  placeholder="Enter password"
                  required
                  @blur.native="validateText(form.password)"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="6 mt-3 mb-3">
            <b-form-group
                id="confirmPassword"
                label="Confirm Password"
                label-for="confirmPassword"
            >
              <b-form-input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                  @blur.native="validateText(form.confirmPassword)"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button variant="outline-secondary" @click="registerCustomer">
          Register
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
        mobile_number: '',
        address: '',
        postcode: '',
        password: '',
        confirmPassword: ''
      },
      loader: null,
      textError: null,
      numberError: null,
      emailError: null,
      reportError: false
    }
  },
  methods: {
    registerCustomer() {
      if (this.textError && this.numberError && this.emailError) {
        this.loader = false;
        return this.reportError = true;
      }

      this.loader = true;

      axios.post(`http://127.0.0.1:8000/api/register`, {
        'first_name': this.form.firstName,
        'last_name': this.form.lastName,
        'date_of_birth': this.form.dateOfBirth,
        'address': this.form.address,
        'postcode': this.form.postcode,
        'mobile_number': this.form.mobileNumber,
        'email': this.form.email,
        'password': this.form.password
      }).then(response => {
        if (response) {
          this.loader = false;
          alert('Registration is complete. ' + response.data.message);
          window.localStorage.setItem('registration', 'complete');
          this.$router.push({
            name: 'home'
          });
        }
      }).catch(error => {
        this.reportError = true;
        this.loader = false;
        console.log(error);
      })
    },
    validateText (text) {
      this.textError = !text.match(/^[A-Za-z]+$/);
    },
    validateNumbers (number) {
      this.numberError = !/^\d+$/.test(number);
    },
    validateEmail (email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailError = !reg.test(email.toLowerCase());
    }
  }
}
</script>
<style>

@media (max-width: 414px) {
  h1 {
    margin-bottom: 1em;
  }
}
</style>