<template>
  <div>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "default",
  components: {Footer, Header}
}
</script>

<style lang="sass">
// Import the reset stylesheet to make the styles look the same across browsers
@import "assets/css/reset.css"
// Imports the global stylesheet for global styles
@import "assets/css/global"

// Apply to all elements with text
h1, h2, h3, h4, h5, h6, input, button, p, span, a
  // Set the font family
  font-family: "Roboto", Roboto, Avenir, Helvetica, Arial, sans-serif
  // Apply font smoothing
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
