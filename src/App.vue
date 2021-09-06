<template>
  <Header/>
  <main class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer/>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')
@import "./assets/reset.css"
@import "./assets/global"

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: "Roboto", Roboto, Avenir, Helvetica, Arial, sans-serif
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
