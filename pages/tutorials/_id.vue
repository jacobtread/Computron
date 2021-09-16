<template>
  <div>
    <article class="content">
      <nuxt-content :document="page"/>
    </article>
  </div>
</template>

<script>
export default {
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
  width: 100%
  max-width: 1000px
  margin: 1em auto
  text-align: center

  ::v-deep
    h2
      font-size: 4em
      display: inline-block
      position: relative
      color: black
      margin: 0.9em 0

      &::before
        content: ''
        position: absolute
        left: 50%
        top: 120%
        width: 150%
        height: 4px
        background-color: $primary
        transform: translateX(-50%)
    p
      line-height: 1.5
      margin: 0 auto
      max-width: 600px

    a:not(.button)
      display: block
      color: #343534
      margin-top: 1.5em

    .button
      display: inline-block
      margin-top: 2em

    img
      margin:
      display: block
      margin-top: 1em
      width: 100%
      height: auto
</style>
