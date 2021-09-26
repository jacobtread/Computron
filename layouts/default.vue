<!-- This file contains the default page layout -->
<template>
  <div>
    <!-- The header componet -->
    <Header />
    <!-- The page content -->
    <Nuxt />
    <!-- The footer component -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"; // Import the header component
import Footer from "../components/Footer"; // Import the footer component

export default {
  // Specify the components that are being used
  components: { Footer, Header },
};
</script>

<style lang="scss">
// Imports the global stylesheet for global styles
@import "~/assets/css/global";
</style>
