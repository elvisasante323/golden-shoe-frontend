<template>
  <b-container>
    <b-row>
      <b-col>
        <b-img
            center
            :src="require('../assets/canvas.jpg')"
            width="327"
            height="445"
            alt="Logo">
        </b-img>
      </b-col>
      <b-col>
        <div class="padding-spacer text-center">
          <h3>Sneaker For Men's Collection</h3>

          <p class="lead">
            When adventure calls, take the Parva Rucksack with you. Exploring cities wandering the globe.
          </p>

          <b-button size="lg" variant="outline-primary">Add to Cart</b-button>
        </div>
      </b-col>
    </b-row>

    <b-row class="margin-spacer">
      <b-col>
        <div class="text-center padding-spacer">
          <h3>Sports Shoes</h3>

          <p class="lead">
            When adventure calls, take the Parva Rucksack with you. Exploring cities wandering the globe.
          </p>

          <b-button size="lg" variant="outline-primary">Add to Cart</b-button>
        </div>
      </b-col>

      <b-col>
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
</style>