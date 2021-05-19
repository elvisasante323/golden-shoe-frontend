<template>
  <div class="bg-dark text-white text-center" id="footer-bar">
    <span id="footer-text">
      &copy; Designed By Elvis Asante
    </span>
  </div>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style scoped>
#footer-bar {
  height: 5em;
}

#footer-text {
  padding-top: 1em;
  position: relative;
  top: 1em;
  font-size: 1.5em;
}
</style>