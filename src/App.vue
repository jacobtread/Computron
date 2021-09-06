<!-- This component stores the base layout of the application -->
<template>
  <Header/>
  <main class="content">
    <!--  Add the router view to display the pages  -->
    <router-view v-slot="{ Component }">
      <transition name="fade"> <!-- Apply a transition when adding or removing pages -->
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
  <Footer/>
</template>

<script>
// Import the Header & Footer Components
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  // Register the components so they can be included in the template
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
// Imports the Roboto font style from the google font api's
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')
// Import the reset stylesheet to make the styles look the same across browsers
@import "./assets/css/reset.css"
// Imports the global stylesheet for global styles
@import "./assets/css/global"

// Apply to all elements with text
h1, h3, h4, h5, h6, input, button, p, span, a
  // Set the font family
  font-family: "Roboto", Roboto, Avenir, Helvetica, Arial, sans-serif
  // Apply font smoothing
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.fade-enter-active,
.fade-leave-active
  transition: transform 0.2s ease
  transform: translateX(0)


.fade-enter-from,
.fade-leave-to
  transform: translateX(-25px)

</style>
