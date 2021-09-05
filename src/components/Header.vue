<template>
  <header>
    <div>
      <img class="logo" src="../assets/logo.svg" alt="Computron Logo" title="Computron">
      <p class="logo__subtext">Computer/Networking Repairs & Application Training</p>
    </div>
    <nav>
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/contact">
        Contact
      </router-link>
      <router-link to="/downloads">
        Downloads
      </router-link>
      <router-link to="/tutorials">
        Tutorials
      </router-link>
      <router-link to="/support">
        Remote Support
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="sass">

@import "../assets/variables"

header
  display: flex
  flex-flow: row

  width: 100%
  padding: 2em 4em

  background-color: $background

.logo
  max-width: 400px
  width: 50vw

  &__subtext
    color: #B4B4B4
    font-size: 0.8em
    margin-top: 1em
    margin-left: 1.5em
    margin-right: 1.5em

// Navigation Bar
nav
  flex: 1 1 auto
  display: flex
  flex-flow: row
  align-items: center
  justify-content: flex-end

  // Navigation Buttons
  a
    padding: 0.75em
    border-radius: 0.1em

    color: #9F9F9F
    text-transform: uppercase
    text-decoration: none
    font-weight: bold

    background-color: $button-background-default

    transition: background-color 0.2s ease, color 0.2s ease

    &:hover:not(.router-link-exact-active)
      background-color: $button-background-hover

    &:is(.router-link-exact-active)
      background-color: $button-background-active
      color: white
      transition: background-color 0.5s ease, color 0.2s ease

@media all and (max-width: 1100px)
  header
    flex-flow: column
    text-align: center
    padding: 1em 2em

  .logo
    width: 100%
    max-width: 500px
    margin: 0 auto

  nav
    justify-content: center
    margin-top: 1em
    flex-wrap: wrap
</style>