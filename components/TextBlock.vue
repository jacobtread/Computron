<template>
  <div :class="{
        'block': true,
        'block--numbered': numbered, // Apply the block--numbered class if numbered is ture
        'block--centered': centered, // Apply the block--centered class if centered is ture
        'block--icon': icon, // Apply the block--icon class if icon was provided
        'block--reversed': reversed // Apply the block--reversed class if reversed is ture
     }">
    <div :class="{'block__text': icon}">
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
    <img v-if="icon" :src="require(`../assets/img/${icon}`)" :alt="iconName" width="16" height="16">
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    title: String,
    numbered: Boolean,
    centered: Boolean,
    icon: String,
    reversed: Boolean,
    iconName: String
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

  &--icon
    display: flex
    flex-flow: row
    align-items: center
    justify-content: space-between

  &--reversed
    flex-flow: row-reverse
    text-align: right

    h1::before
      left: auto
      right: 0

    .buttons
      justify-content: flex-end

  &__text
    flex: 1 1 auto
    max-width: 500px

  img
    max-height: 200px
    width: auto
    height: auto

  &--numbered
    h1
      font-size: 4em

      &::before
        width: 150%

  p
    line-height: 1.5

  &--centered
    text-align: center

    h1::before
      left: 50%
      right: auto
      transform: translateX(-50%)

    p
      margin: 0 auto
      max-width: 600px

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

    &--reversed .buttons
      justify-content: center

    h1::before
      left: 50%
      right: auto
      transform: translateX(-50%)

  .buttons
    justify-content: center
</style>
