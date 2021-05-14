<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-12">
        <b-img
            center
            :src="require('../assets/logo-2.png')"
            width="150"
            height="150"
            alt="Logo">
        </b-img>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-6 text-center">
        <h3>Welcome To Golden Shoe!</h3>
        <p>
          Quibusdam perspiciatis pariatur magnam ducimus excepturi error libero provident animi laboriosam maiores ad
          explicabo ea laudantium nostrum dolor distinctio, quas fugiat doloribus, sit, possimus obcaecati ab quo vel
          commodi eum. Laudantium libero, voluptate rerum sunct hic.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esse numquam blanditis quos, fuga, aspernatur doloribus
          expedita, soluta dolore cumque
        </p>

        <b-button size="lg" variant="outline-primary">View Our Products</b-button>
      </div>

      <div class="col-sm-6">
        <b-img
            id="about-img"
            center
            :src="require('../assets/trainer-3.png')"
            width="330"
            height="250"
            alt="Trainer">
        </b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>
<style scoped>
#about-img {
  padding-top: 2em;
}

@media (max-width: 375px) {
  img {
    width: 230px;
    height: 150px;
  }
}
</style>
