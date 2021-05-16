<template>
  <div id="navigation-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><strong>golden shoe</strong></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/" active>Home</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">Products</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
          <b-nav-item href="#" @click="login">Login</b-nav-item>
          <b-nav-item href="/register">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <login v-if="showLogin" />
  </div>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "NavigationBar",
  components: {
    Login
  },
  data () {
    return {
      showLogin: false
    }
  },
  methods: {
    login () {
      this.showLogin = true;
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  margin-left: 5rem;
  margin-right: 20rem;
}

.nav-item {
  padding-right: 2em;
}

@media (min-width: 360px) {
  .nav-item {
    text-align: center;
  }
}

@media (max-width: 375px) {
  .navbar-brand {
    margin-left: 1rem;
    margin-right: 0;
  }
}

@media (max-width: 414px) {
  .navbar-brand {
    margin-left: 2rem;
    margin-right: 0;
  }
}
</style>