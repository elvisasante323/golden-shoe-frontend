<template>
  <b-container>
    <b-row v-if="loader">
      <b-col sm="12">
        <b-img
            center
            :src="require('../assets/loader.gif')"
            width="527"
            height="445"
            alt="Logo">
        </b-img>

        <p class="text-center">
          {{ loaderText }}
        </p>
      </b-col>
    </b-row>

    <b-row v-if="!loader">
      <b-col sm="6" md="8" offset-md="2" class="mt-5">
        <h4 class="text-center bg-secondary text-white">
          YOUR ORDER DETAILS
        </h4>

        <table class="table table-bordered text-center">
          <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="detail in cardDetails" :key="detail.id">
            <td>{{ detail.name }}</td>
            <td>
              {{ detail.itemQuantity }}
            </td>
            <td>
              £{{ detail.price }}
            </td>
            <td>
              £{{ detail.itemQuantity * detail.price }}
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>

            </td>
            <td>
              <strong>
                Grand Total
              </strong>
            </td>
            <td>
              {{ calculateGrandTotal(cardDetails) }}
            </td>
          </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>

    <b-row v-if="!loader">
      <b-col sm="6" md="8" offset-md="2" class="mt-5">
        <h4 class="text-center bg-secondary text-white mb-5">
          BILLING DETAILS
        </h4>

        <p>
          Should we use your details on our system for billing?
        </p>

        <b-button-group>
          <b-button variant="outline-secondary" class="ml-5" @click="populate">
            Yes
          </b-button>
          <b-button variant="secondary" @click="depopulate">
            No
          </b-button>
        </b-button-group>

        <b-form class="mt-5">
          <b-form-group
              id="firstName"
              label="Firstname:"
              label-for="firstName"
          >
            <b-form-input
                id="firstName"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="firstName"
                type="text"
                placeholder="Enter your firstname"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="lastName"
              label="Lastname:"
              label-for="lastName"
          >
            <b-form-input
                id="lastName"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="lastName"
                type="text"
                placeholder="Enter your lastname"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="address"
              label="Address :"
              label-for="address"
          >
            <b-form-input
                id="address"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="address"
                type="text"
                placeholder="Enter your address"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="postcode"
              label="Postcode :"
              label-for="postcode"
          >
            <b-form-input
                id="postcode"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="postcode"
                type="text"
                placeholder="Enter your postcode"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="nameOnCard"
              label="Name on card :"
              label-for="nameOnCard"
          >
            <b-form-input
                id="nameOnCard"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="nameOnCard"
                type="text"
                placeholder="This field is required"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="cardNumber"
              label="Card Number :"
              label-for="cardNumber"
          >
            <b-form-input
                id="cardNumber"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="cardNumber"
                type="number"
                placeholder="This field should be 16 digits long"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="cardSecurity"
              label="Card Security Number :"
              label-for="cardSecurity"
          >
            <b-form-input
                id="cardSecurity"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="cardSecurity"
                type="number"
                placeholder="This field should be 3 digits long"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="amount"
              label="Amount  :"
              label-for="amount"
          >
            <b-form-input
                id="amount"
                class="mt-2 mb-3"
                :class="error ? 'error' : ''"
                v-model="amount"
                type="number"
                placeholder="You can only pay in full"
                required
            ></b-form-input>
          </b-form-group>

          <b-button size="md" variant="outline-secondary" @click="pay">
            Pay
          </b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-modal
        id="receipt-modal"
        title="Receipt of Transaction"
        ok-only
        ok-title="Continue Shopping"
        @ok="returnToShopping"
    >
      <p class="my-4">
        Thanks for shopping with us! The following is a receipt of your transaction.
      </p>

      <b-list-group>
        <b-list-group-item>Transaction Reference: {{ receipt.reference }}</b-list-group-item>
        <b-list-group-item>Products : {{ receipt.products }}</b-list-group-item>
        <b-list-group-item>Amount Paid : {{ receipt.amount_paid }}</b-list-group-item>
        <b-list-group-item>Delivery Post: {{ receipt.delivery_postcode }}</b-list-group-item>
        <b-list-group-item>Delivery Address: {{ receipt.delivery_address }}</b-list-group-item>
        <b-list-group-item>Delivery Date: {{ receipt.delivery_date }}</b-list-group-item>
      </b-list-group>

    </b-modal>
  </b-container>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Checkout',
  data() {
    return {
      loader: true,
      firstName: null,
      lastName: null,
      address: null,
      postcode: null,
      nameOnCard: null,
      cardNumber: null,
      cardSecurity: null,
      amount: null,
      grandTotal: null,
      shoeCollection: [],
      error: false,
      cardDetails: null,
      userId: null,
      loaderText: 'Preparing for checkout ..............',
      receipt: ''
    }
  },
  methods: {
    returnToShopping () {
      this.$router.push({
        name: 'home'
      });
    },
    pay() {
      if (this.amount < this.grandTotal || this.amount > this.grandTotal ) {
        return alert('Please pay the exact amount of ' + this.grandTotal);
      }

        this.loaderText = 'Processing your order .........';
        this.loader = true;

        axios.post(`http://127.0.0.1:8000/api/checkout`, {
          'userId': this.userId,
          'shoeCollection': this.shoeCollection,
          'grandTotal': this.grandTotal,
          'nameOnCard': this.nameOnCard,
          'cardNumber': this.cardNumber,
          'cardSecurity': this.cardSecurity
        }).then(response => {
          if (response) {
            this.loader = false;
            this.receipt = response.data.success;console.log(this.receipt);
            this.$bvModal.show('receipt-modal');
          }
        }).catch(error => {
          if (error) {
            this.loader = false;
            alert('Please check that all fields are filled correctly. Read field placeholders for more info.');
            this.error = true;
          }
        })
    },
    depopulate() {
      this.firstName = '';
      this.lastName = '';
      this.address = '';
      this.postcode = '';
    },
    populate() {
      this.firstName = window.localStorage.getItem('userFirstname');
      this.lastName = window.localStorage.getItem('userLastname');
      this.address = window.localStorage.getItem('userAddress');
      this.postcode = window.localStorage.getItem('userPostcode');
    },
    calculateGrandTotal(items) {
      let sum = 0;

      for (let count = 0; count < items.length; count++) {
        sum += items[count].price * items[count].itemQuantity;
      }

      this.grandTotal = sum.toFixed(2);
      return '£' + sum;
    },
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 6000);

    this.cardDetails = JSON.parse(window.localStorage.getItem('cardDetails'));

    this.userId = window.localStorage.getItem('userId');

    for (let count = 0; count < this.cardDetails.length; count++) {
      let shoe = {};

      shoe.id = this.cardDetails[count].id;
      shoe.userQuantity = this.cardDetails[count].itemQuantity;
      shoe.product = this.cardDetails[count].name;

      this.shoeCollection.push(shoe);
    }
  }
}
</script>
<style scoped>
.error {
  border-color: red;
}
</style>