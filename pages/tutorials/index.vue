<template>
  <div class="blocks">
    <TextBlock v-for="(tutorial, index) in tutorials" :key="index" :title="tutorial.title">
      {{ tutorial.description }}
      <template #buttons>
        <NuxtLink :to="'/tutorials/' + tutorial.slug" class="button">
          View Tutorial
        </NuxtLink>
      </template>
    </TextBlock>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import TextBlock from "~/components/TextBlock.vue"; // Import the text block component

export default {
  components: {TextBlock},
  // Handle asynchronously fetched data
  async asyncData(context: Context) {
    const $content = context.$content;
    /*
    * We need to retrieve the titles, descriptions and slugs
    * of the tutorials from the file system so that they can
    * be displayed on the page.
    *
    * We can ignore the body because we don't access that yet
    */
    const tutorials = await $content('tutorials')
      .only(['title', 'description', 'slug'])
      .fetch();
    return {tutorials} // Pass the tutorials as data
  }
}
</script>
