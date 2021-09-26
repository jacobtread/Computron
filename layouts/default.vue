<!-- This file contains the default page layout -->
<template>
  <div>
    <!-- The header componet -->
    <Header />
    <!-- The page content -->
    <Nuxt />
    <!-- Button for returning to the top -->
    <TopButton />
    <!-- The footer component -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue"; // Import the Header component
import Footer from "~/components/Footer.vue"; // Import the Footer component
import TopButton from "~/components/TopButton.vue"; // Import the TopButton component

export default {
  // Specify the components that are being used
  components: { Footer, Header, TopButton },
};
</script>

<style lang="scss">
// Imports the global stylesheet for global styles
@import "~/assets/css/global";
</style>
