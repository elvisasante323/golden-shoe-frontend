<template>
  <div id="home">
    <navigationBar />

    <carousel />

    <about id="about-spacer" />

    <products id="products-spacer" />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";
import About from "../views/About";
import Products from "../components/Products";

export default {
  name: "Home",
  components: {
    NavigationBar,
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
</style>
