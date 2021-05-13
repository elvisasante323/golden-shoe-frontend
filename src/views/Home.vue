<template>
  <div id="home">
    <navigationBar />
    <carousel />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  components: {
    NavigationBar,
    Carousel
  },
};
</script>
