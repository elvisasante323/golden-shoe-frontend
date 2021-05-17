<template>
  <div class="mt-5">
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
            Loading your details.....
          </p>
        </b-col>
      </b-row>
    </b-container>

      <b-container v-if="!loader">
        <b-row>
          <b-col offset-sm="3">
            <h1>Login</h1>

            <b-form>
              <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
              >
                <b-form-input
                    id="input-1"
                    :class="error ? 'error' : ''"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                    @blur.native="validateEmail(form.email)"
                ></b-form-input>
              </b-form-group> <br />

              <b-form-group
                  id="input-group-2"
                  label="Email password:"
                  label-for="input-2"
              >
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Enter password"
                    required
                    :class="error ? 'error' : ''"
                ></b-form-input>
              </b-form-group>

              <b-button variant="outline-secondary" class="mt-3" @click="login">
                Login
              </b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "Login",
  methods: {
    validateEmail (email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.validEmail = !reg.test(email.toLowerCase());
    },
    login () {
      this.loader = true;

      axios.post(`http://127.0.0.1:8000/api/login`, {
        email: this.form.email,
        password: this.form.password
      }).then(response => {
        if (response.data) {
          console.log(response.data);
          this.loader = false;

          window.localStorage.setItem('userFirstname', response.data.firstName);
          window.localStorage.setItem('userLastname', response.data.lastName);
          window.localStorage.setItem('userAddress', response.data.address);
          window.localStorage.setItem('userPostcode', response.data.postcode);

          this.$router.push({
            name: 'orders'
          });
        }
      }).catch (error => {
        console.log(error);
        this.error = true;
        this.loader = false;
      })
    }
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: false,
      loader: false
    }
  }
}
</script>
<style scoped>
.error {
  border-color: red;
}
</style>