<template>
  <header>
    <div>
      <img class="logo" src="../assets/img/logo.svg" alt="Computron Logo" title="Computron" width="16" height="16">
      <p class="logo__subtext">Computer/Networking Repairs & Application Training</p>
    </div>
    <nav>
      <NuxtLink to="/" class="button">Home</NuxtLink>
      <NuxtLink to="/contact" class="button">Contact</NuxtLink>
      <NuxtLink to="/downloads" class="button">Downloads</NuxtLink>
      <NuxtLink to="/tutorials" class="button">Tutorials</NuxtLink>
      <NuxtLink to="/tutorials/support-setup" class="button">Remote Support</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="sass">

@import "../assets/css/variables"

// The header element
header
  // Make the header a flex box
  display: flex
  // Flow the items horizontally
  flex-flow: row

  // Fill the full available width
  width: 100%
  // Apply padding 2x the font size for the top & bottom and 4x for the left & right
  padding: 2em 4em

  // Apply the dark background colour
  background-color: $background
  // Add a bottom margin to keep the below elements spaced away
  margin-bottom: 15vh

// The header logo
.logo
  // Prevent the image from being greater than 400px wide
  max-width: 400px
  // Set the image width to half of the vbox width
  width: 50vw
  // Set the image height to 70px
  height: 70px

  // The text under the logo
  &__subtext
    // Align the text to center
    text-align: center
    // Set the text to a gray
    color: #B4B4B4
    // Set the font size to 0.8x the normal font size
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

// Only apply when screen width hits 1150px
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
