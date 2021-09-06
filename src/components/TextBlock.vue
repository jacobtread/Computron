<!-- This p-->
<template>
  <div class="block" v-bind:class="{ 'block--centered': centered }">
    <h1>{{ title }}</h1>
    <p>
      <slot/>
    </p>
    <div class="buttons">
      <slot name="buttons"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    title: String,
    centered: Boolean
  }
}
</script>

<style scoped lang="sass">
@import "../assets/variables"

.block
  display: block
  width: 100%
  padding: 0 1em

  &--centered
    text-align: center

    .buttons
      justify-content: center

  h1
    display: inline-block
    position: relative
    color: black
    margin-bottom: 0.9em

    &::before
      content: ''
      position: absolute
      left: 50%
      top: 120%
      width: 80%
      height: 4px
      transform: translateX(-50%)
      background-color: $primary

  p
    line-height: 1.5
    max-width: 600px
    margin: 0 auto

.buttons
  display: flex
  flex-flow: row
  flex-wrap: wrap
  margin-top: 1em

  .button
    display: inline-block

@media screen and (max-width: 700px)
  .block
    flex-flow: column-reverse
    text-align: center
  .buttons
    justify-content: center
</style>