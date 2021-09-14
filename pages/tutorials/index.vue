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

<script>
import TextBlock from "../../components/TextBlock";

export default {
  components: {TextBlock},
  async asyncData({$content}) {
    const tutorials = await $content('tutorials').only(['title', 'description', 'slug']).fetch();
    console.log(tutorials)
    return {
      tutorials
    }
  }
}
</script>

<style scoped lang="sass">

</style>
