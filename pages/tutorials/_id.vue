<template>
  <article class="content">
    <!-- &lt; is the escape code for the "<" character -->
    <NuxtLink to="/tutorials" class="button">&lt; Go Back</NuxtLink>
    <!-- Include the tutorial content markdown using Nuxt Content :document is the slug -->
    <nuxt-content :document="tutorial" />
  </article>
</template>

<script lang="ts">
import { Context } from "@nuxt/types"; // Import nuxt context type
import { Route } from "vue-router/types/router"; // Import vue-router route type

export default {
  // Method for providing data when being server-side rendered
  async asyncData(c: Context /* The nuxt context */) {
    const $content = c.$content; // The nuxt content
    const route: Route = c.route; // The nuxt current route
    // Retrieve the tutorial that matches the page id in the route
    const tutorial = await $content("tutorials", route.params.id).fetch();
    // Return the tutorial
    return { tutorial };
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 2em;
}
</style>

<!-- These styles cannot be scoped because they affect the nuxt content -->
<style lang="scss">
@import "~/assets/css/variables";

.nuxt-content {
  h2 {
    font-size: 4em;
    display: inline-block;
    position: relative;
    color: black;
    margin: 0.9em 0;

    @include underline();

    &::before {
      width: 150%;
    }
  }
  p {
    line-height: 1.5;
    margin: 0 auto;
    max-width: 600px;
  }

  a:not(.button) {
    display: block;
    color: #343534;
    margin-top: 1.5em;
  }

  .button {
    display: inline-block;
    margin-top: 2em;
  }

  img {
    margin: 1em;
    display: block;
    margin-top: 6em;
    width: 100%;
    height: auto;
  }
}
</style>
