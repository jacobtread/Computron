<template>
  <header>
    <div>
      <img class="logo" src="../assets/logo.svg" alt="Computron Logo" title="Computron" width="16" height="16">
      <p class="logo__subtext">Computer/Networking Repairs & Application Training</p>
    </div>
    <nav>
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/contact" class="button">Contact</router-link>
      <router-link to="/downloads" class="button">Downloads</router-link>
      <router-link to="/tutorials" class="button">Tutorials</router-link>
      <router-link to="/support" class="button">Remote Support</router-link>
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
  margin-bottom: 15vh

.logo
  max-width: 400px
  width: 50vw
  height: auto

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
  .button
    padding: 0.75em
    border-radius: 0.1em

@media screen and (max-width: 1150px)
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