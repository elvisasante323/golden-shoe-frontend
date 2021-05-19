<template>
  <b-container>
    <div v-if="!showCheckout">
      <b-row v-for="shoe in shoes" :key="shoe.id" class="mb-5">
        <b-col sm="6">
          <b-img
              center
              :src="require('../assets/' + shoe.image)"
              width="527"
              height="445"
              :alt="shoe.name">
          </b-img>
        </b-col>
        <b-col sm="6">
          <div class="padding-spacer text-center paragraph-spacer">
            <h1> {{ shoe.name }}</h1>

            <p class="font-sizer">
              {{ shoe.description }}
            </p>

            <b-list-group>
              <b-list-group-item>Price: £{{ shoe.price }}</b-list-group-item>
              <b-list-group-item>Color : {{ shoe.color }}</b-list-group-item>
              <b-list-group-item>Quantity Left: {{ shoe.quantity }}</b-list-group-item>
              <b-list-group-item>Size: {{ shoe.size }}</b-list-group-item>
            </b-list-group>

            <b-form-group
                class="mt-3"
                label="Enter quantity:"
                :label-for="shoe.name"
                description="Please enter a number equal to or less that the displayed available quantity"
            >
              <b-form-input
                  :id="shoe.name"
                  type="number"
                  placeholder="Enter quantity"
                  required
              ></b-form-input>
            </b-form-group>

            <b-button size="md" variant="outline-secondary" class="mt-3" @click="addToCart(shoe)">
              Add to Cart
            </b-button>

            <b-modal id="checkout"
                     title="Cart"
                     ok-title="Checkout"
                     ok-variant="outline-secondary"
                     no-close-on-backdrop
                     no-close-on-esc
                     @ok="checkout"
                     cancel-title="Continue Shopping"
            >
            <span v-if="cartDetails.length === 1">
              You have added an item to your cart.
            </span>
              <span v-else>
              You have added {{ cartDetails.length }} items to your cart.
            </span>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Products',
  data() {
    return {
      shoes: null,
      cartDetails: [],
      showCheckout: false
    }
  },
  methods: {
    checkout () {
      window.localStorage.setItem('cardDetails', JSON.stringify(this.cartDetails));
      this.$router.push({ name: 'checkout'});
    },
    addToCart(shoe) {
      let userQuantity = document.getElementById(shoe.name).value;

      if (
          userQuantity > shoe.quantity || userQuantity === ''
      ) {
        return alert(
            'There are ' + shoe.quantity + ' items available for this product. Therefore, enter a quantity less then ' +
            userQuantity
        );
      }

      if (this.cartDetails.length > 0) {
        const lastItem = this.cartDetails[this.cartDetails.length - 1];
        const itemExists = shoe.id;

        if (lastItem.id === itemExists) {
          this.cartDetails.pop();
        }
      }

      shoe.itemQuantity = userQuantity;

      this.cartDetails.push(shoe);

      this.$bvModal.show('checkout');
    }
  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/get-shoes`).then(response => {
      if (response.data) {
        this.shoes = response.data.shoes;
      }
    }).catch(error => {
      console.log(error);
    })
  }
}
</script>
<style scoped>
.mb-5 {
  margin-bottom: 10em !important;
}

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