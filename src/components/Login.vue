<template>
  <div>
    <b-modal
        id="modal-1"
        title="Login"
        ok-only
        ok-variant="secondary"
        ok-title="Login"
        :no-close-on-backdrop="true"
    >
      <b-form>
        <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
          <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
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
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {

  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    this.$bvModal.show('modal-1');
  }
}
</script>
<style scoped>

</style>