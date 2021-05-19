<template>
  <div id="navigation-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><strong>golden shoe</strong></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/home" active>Home</b-nav-item>
          <b-nav-item @click="scrollTo('about-spacer')">About Us</b-nav-item>
          <b-nav-item @click="scrollTo('products-spacer')">Products</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>

export default {
  name: "NavigationBar",
  data () {
    return {
      loggedIn: true,
      registered: true,
      numberOfItems: null
    }
  },
  methods: {
    scrollTo (id) {
      const element = document.querySelector('#' + id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  },
  mounted () {
    if (window.localStorage.getItem('registration') === 'complete') {
      this.registered = false;
    }

    if (window.localStorage.getItem('userFirstname')) {
      this.loggedIn = false;
      this.registered = false;
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  margin-left: 5rem;
  margin-right: 24rem;
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