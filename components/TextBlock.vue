<template>
  <div class="block" v-bind:class="{ 'block--numbered': numbered, 'block--centered': centered }">
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
    numbered: Boolean,
    centered: Boolean
  }
}
</script>

<style scoped lang="sass">
@import "../assets/css/variables"

.block
  display: block
  width: 100%
  padding: 0 1em
  text-align: left

  h1
    display: inline-block
    position: relative
    color: black
    margin-bottom: 0.9em

    &::before
      content: ''
      position: absolute
      left: 0
      top: 120%
      width: 80%
      height: 4px
      background-color: $primary

  &--numbered
    h1
      font-size: 4em

      &::before
        width: 150%

  p
    line-height: 1.5
    max-width: 600px

  &--centered
    text-align: center

    h1::before
      left: 50%
      right: auto
      transform: translateX(-50%)

    p
      margin: 0 auto

    .buttons
      justify-content: center

    .extra
      text-align: center
.buttons
  display: flex
  flex-flow: row
  flex-wrap: wrap
  margin-top: 1em

  .button
    display: inline-block

.extra
  display: block
  text-align: left

  ::v-deep a
    display: block
    color: #343534
    margin-top: 1.5em

@media screen and (max-width: 700px)
  .block
    flex-flow: column-reverse
    text-align: center

    h1::before
      left: 50%
      right: auto
      transform: translateX(-50%)

  .buttons
    justify-content: center
</style>
