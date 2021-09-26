<template>
  <article class="content">
    <!-- &lt; is the escape code for the "<" character -->
    <NuxtLink to="/tutorials" class="button">&lt; Go Back</NuxtLink>
    <nuxt-content :document="tutorial" />
  </article>
</template>

<script>
export default {
  async asyncData({
    $content /* The nuxt content api */,
    route /* The current route */,
  }) {
    return {
      // Retrieve the tutorial that matches the page id in the route
      tutorial: await $content("tutorials", route.params.id).fetch(),
    };
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables";

.content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 2em;

  ::v-deep {
    h2 {
      font-size: 4em;
      display: inline-block;
      position: relative;
      color: black;
      margin: 0.9em 0;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 120%;
        width: 150%;
        height: 4px;
        background-color: $primary;
        transform: translateX(-50%);
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
}
</style>
