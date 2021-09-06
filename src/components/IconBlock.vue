<template>
  <div class="block" v-bind:class="{ 'block--reversed': reversed }">
    <div class="block__text">
      <h1>{{ title }}</h1>
      <p>
        <slot/>
      </p>
      <div class="buttons">
        <slot name="buttons"/>
      </div>
    </div>
    <img class="block__image" :src="require(`../assets/${icon}`)" :alt="iconName" width="16" height="16">
  </div>
</template>

<script>
export default {
  name: "IconBlock",
  props: {
    title: String,
    icon: String,
    reversed: Boolean,
    iconName: String
  }
}
</script>

<style scoped lang="sass">
@import "../assets/variables"

.block
  display: flex
  flex-flow: row
  align-items: center
  justify-content: space-between

  width: 100%
  padding: 0 1em

  &__text
    flex: 1 1 auto
    max-width: 500px

  &__image
    max-height: 200px
    width: auto
    height: auto

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

  p
    line-height: 1.5

  &--reversed
    flex-flow: row-reverse
    text-align: right

    h1::before
      left: auto
      right: 0

    .buttons
      justify-content: flex-end


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

    &--reversed
      .buttons
      justify-content: center

    h1::before
      left: 50%
      right: auto
      transform: translateX(-50%)

  .buttons
    justify-content: center

</style>