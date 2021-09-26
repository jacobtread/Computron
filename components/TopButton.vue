<template>
  <button class="button--top button" id="topButton">Back to top ^</button>
</template>
<script lang="ts">
export default {
  name: "TopButton",
  // Hook for when the component is added to the DOM
  mounted() {
    const footer: HTMLElement = document.getElementById("footer")!;
    const topButton: HTMLElement = document.getElementById("topButton")!;
    // Add a new listener for when the button is
    topButton.onclick = () =>
      // Scroll to the page top smoothly
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    const updateButton = () => {
      const { innerHeight, scrollY } = window;
      const { documentElement, body } = document;
      // Caculates if the footer element is within the page
      const footerVisible: boolean =
        innerHeight + scrollY >=
        body.offsetHeight - footer.offsetHeight;
      // Calculates if the document scroll is more than half the window height
      const passedHalfHeight = documentElement.scrollTop > innerHeight / 2;
      /* 
        Determines whether or not to display the button.
        In this case the screen must be scrolled at least half the 
        window height and the page footer must not be within view
      */
      const shouldDisplay: boolean = !footerVisible && passedHalfHeight;
      // Toggle the active class if should be displayed
      topButton.classList.toggle("button--top--active", shouldDisplay);
    };
    // Add a new listener to the scroll event
    document.addEventListener("scroll", updateButton);
    // Update the button on first mount incase the page is already scrolled
    updateButton();
  },
};
</script>
<style lang="scss">
.button--top {
  position: fixed;
  bottom: 2em;
  right: 2em;
  z-index: 0;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s ease !important;

  &--active {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
