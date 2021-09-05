<template>
  <footer>
    <div class="contact">
      <h4>Contact</h4>
      <div class="contact__info">
        <h3>Josh</h3>
        <p><span>Email</span>josh@computron.co.nz</p>
      </div>
      <p>Website Designed by Jacob Read</p>
    </div>
    <div class="logo-block">
      <img class="logo" src="../assets/logo.svg" alt="Computron Logo" title="Computron" width="16" height="16">
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="sass">
@import "../assets/variables"

footer
  margin-top: 25vh

  display: flex
  flex-flow: row

  width: 100%
  padding: 4em

  background-color: $background

.logo-block
  display: flex
  flex: 1 1 auto
  justify-content: flex-end

.logo
  width: 100%
  height: auto
  max-width: 300px

.contact

  h4
    color: white
    font-weight: normal

  &__info
    margin-top: 1em

    h3
      color: #BDBDBD
      margin-bottom: 0.5em
      font-weight: normal
      font-size: 0.9em

    p
      color: #A1A1A1
      margin-bottom: 2em

      span
        color: white
        margin-right: 0.25em
        font-weight: bold
  p
    color: #BDBDBD

@media all and (max-width: 835px)
  footer
    flex-flow: column

  .logo
    width: 100%
    max-width: 500px
    margin: 4em auto 0

</style>