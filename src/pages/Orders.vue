<template>
  <b-container class="mt-5">
    <b-row>
      <b-col offset-sm="2">

        <b-alert show>
          You have not ordered anything yet {{ userName }}
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      userName: null
    }
  },
  mounted() {
    if (window.localStorage.getItem('userFirstname')) {
      this.userName = window.localStorage.getItem('userFirstname');
    }
  }
}
</script>
<style>

</style>