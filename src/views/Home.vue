<template>
  <div id="home">
    <navigation-bar />

    <carousel  />

    <about id="about-spacer"  />

    <products id="products-spacer"  />

    <footer-bar />
  </div>
</template>

<script>

import Carousel from "../components/Carousel";
import About from "../views/About";
import Products from "../components/Products";
import FooterBar from "../components/FooterBar";
import NavigationBar from "../components/NavigationBar";

export default {
  name: "Home",
  components: {
    Carousel,
    About,
    Products,
    FooterBar,
    NavigationBar
  }
};
</script>

<style>
#about-spacer {
  margin-bottom: 10em;
}

@media (max-width: 768px) {
  #about-spacer {
    margin-bottom: 5em;
  }
}
</style>
