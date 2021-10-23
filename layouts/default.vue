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
import "~/assets/css/global.scss"; // Import the global stylesheet

export default {};
</script>