<template>
  <div id="home">
    <navigationBar />

    <carousel />

    <about class="mt-5" />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";
import About from "../views/About";

export default {
  name: "Home",
  components: {
    NavigationBar,
    Carousel,
    About
  },
};
</script>
