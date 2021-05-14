<template>
  <b-container>
    <b-row>
      <b-col sm="6">
        <b-img
            center
            :src="require('../assets/canvas.jpg')"
            width="527"
            height="445"
            alt="Logo">
        </b-img>
      </b-col>
      <b-col sm="6">
        <div class="padding-spacer text-center paragraph-spacer">
          <h1>Sneaker For Men's Collection</h1>

          <p class="font-sizer">
            When adventure calls, take the Parva Rucksack with you. Exploring cities wandering the globe.
          </p>

          <b-button size="lg" variant="outline-primary">Add to Cart</b-button>
        </div>
      </b-col>
    </b-row>

    <b-row class="margin-spacer">
      <b-col sm="6">
        <div class="text-center padding-spacer">
          <h1>Sports Shoes</h1>

          <p class="font-sizer">
            When adventure calls, take the Parva Rucksack with you. Exploring cities wandering the globe.
          </p>

          <b-button size="lg" variant="outline-primary">Add to Cart</b-button>
        </div>
      </b-col>

      <b-col sm="6">
        <b-img
            center
            :src="require('../assets/sport-shoes.jpg')"
            width="527"
            height="445"
            alt="Sport Shoes">
        </b-img>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

</script>
<style scoped>
.padding-spacer {
  padding-top: 5em !important;
}

.margin-spacer {
  margin-top: 5em !important;
}

.font-sizer {
  font-size: 1.5em;
}

@media (max-width: 768px) {
  img {
    width: 230px;
    height: 150px;
  }

  .font-sizer {
    font-size: .9em !important;
  }

  .padding-spacer {
    padding-top: 1em !important;
  }
}

@media (max-width: 414px) {
  #about-img {
    margin-top: 2em !important;
  }
}
</style>