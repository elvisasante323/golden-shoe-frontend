<template>
  <b-carousel
  id="carousel-1"
  :interval="3000"
  indicators
  fade
  controls
  img-width="1024"
  img-height="480"
  no-wrap
  >
    <b-carousel-slide :img-src="require('../assets/trainer-1.png')">
      <b-jumbotron header="With His Sixth Ring, Legend Status is Attained" lead="Only real legends can wear these kicks">
        <b-button pill variant="outline-light" href="#" size="lg">More Info</b-button>
      </b-jumbotron>
    </b-carousel-slide>

    <b-carousel-slide :img-src="require('../assets/trainer-2.png')">
      <b-jumbotron header="With His Sixth Ring, Legend Status is Attained" lead="Only real legends can wear these kicks">
        <b-button pill variant="outline-light" href="#" size="lg">More Info</b-button>
      </b-jumbotron>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  mounted () {
    const srOnly = document.querySelectorAll('.sr-only');
    srOnly[0].innerHTML = '';
    srOnly[1].innerHTML = '';
  }
}
</script>

<style scoped>
.jumbotron {
  position: relative;
  bottom: 25em;
}

</style>