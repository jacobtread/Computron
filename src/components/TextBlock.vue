<template>
  <div class="block" v-bind:class="{ 'block--numbered': numbered }">
    <h1>{{ title }}</h1>
    <p>
      <slot/>
    </p>
    <div class="buttons">
      <slot name="buttons"/>
    </div>
    <div class="extra">
      <slot name="extra"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    title: String,
    numbered: Boolean
  }
}
</script>

<style scoped lang="sass">
@import "../assets/css/variables"

.block
  display: block
  width: 100%
  padding: 0 1em
  text-align: center


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

  &--numbered
    h1
      font-size: 4em

      &::before
        width: 150%
  p
    line-height: 1.5
    max-width: 600px
    margin: 0 auto

.buttons
  display: flex
  flex-flow: row
  flex-wrap: wrap
  margin-top: 1em
  justify-content: center

  .button
    display: inline-block

.extra
  display: block
  text-align: center

  ::v-deep a
    display: block
    color: #343534
    margin-top: 1.5em
</style>