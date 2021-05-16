<template>
  <div id="register" class="mt-5">
    <h1 class="text-center">
      Register as a customer
    </h1>
    <b-container>
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
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6 mt-3">
            <label for="dateOfBirth">Date of birth</label>
            <b-form-datepicker
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'} "
                id="dateOfBirth"
                v-model="form.dateOfBirth"
                class="mb-2"></b-form-datepicker>
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
                  placeholder="Enter your email"
                  required
              ></b-form-input>
            </b-form-group>
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
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button variant="outline-secondary">
          Register
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        postcode: '',
        password: '',
        confirmPassword: ''
      }
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