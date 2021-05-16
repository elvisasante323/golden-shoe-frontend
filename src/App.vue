<template>
  <div id="app">
    <navigation-bar />
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar";

export default {
  name: "App",
  components: {
    NavigationBar
  },
};
</script>

<style>

</style>
