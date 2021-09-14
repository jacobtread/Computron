<template>
  <div>
    <article class="content">
      <nuxt-content :document="page"/>
    </article>
  </div>
</template>

<script>
import TextBlock from "../../components/TextBlock";

export default {
  components: {TextBlock},
  async asyncData({$content, route}) {
    const page = await $content('tutorials', route.params.id).fetch()
    return {
      page
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/css/variables"

.content
  max-width: 900px
  margin: 1em auto

  ::v-deep .step
    color: $primary
</style>
