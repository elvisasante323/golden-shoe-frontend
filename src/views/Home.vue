<template>
  <div id="home">
    <carousel />

    <about id="about-spacer" />

    <products id="products-spacer" />
  </div>
</template>

<script>

import Carousel from "../components/Carousel";
import About from "../views/About";
import Products from "../components/Products";

export default {
  name: "Home",
  components: {
    Carousel,
    About,
    Products
  },
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
