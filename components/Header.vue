<template>
  <header>
    <div>
      <img
        class="logo"
        src="../assets/img/logo.svg"
        alt="Computron Logo"
        title="Computron"
        width="16"
        height="16"
      />
      <p class="logo__subtext">
        Computer/Networking Repairs & Application Training
      </p>
    </div>
    <!-- Navigation -->
    <nav>
      <!-- Navigation links (NuxtLink used "to" attribute to provide routing) -->
      <NuxtLink to="/" class="button">Home</NuxtLink>
      <NuxtLink to="/contact" class="button">Contact</NuxtLink>
      <NuxtLink to="/downloads" class="button">Downloads</NuxtLink>
      <NuxtLink to="/tutorials" class="button">Tutorials</NuxtLink>
      <NuxtLink to="/tutorials/support-setup" class="button">
        Remote Support
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
// Export the component with its name
export default { name: "Header" };
</script>

<style scoped lang="scss">
@import "~/assets/css/variables"; // Import the variables stylesheet

// The header element
header {
  display: flex; // Make the header a flex box
  flex-flow: row; // Flow the items horizontally

  width: 100%; // Span the entire page width
  padding: 2em 4em; // Apply padding 2x the font size for the top & bottom and 4x for the left & right

  background-color: $background; // Apply the dark background colour
  margin-bottom: 15vh; // Add a bottom margin to keep the below elements spaced away
}

// The logo element
.logo {
  max-width: 400px; // Prevent the image from being greater than 400px wide
  width: 50vw; // Set the image width to half of the vbox width
  height: 70px; // Set the image height to 70px

  // The text under the logo
  &__subtext {
    text-align: center; // Align the text to center
    color: #b4b4b4; // Set the text to a gray
    font-size: 0.8em; // Set the font size to 0.8x the normal font size
    margin: 1em 1.5em 0; // Apply a margin of 1em for the top and 1.5em for the left & right
  }
}

// the navigation bar
nav {
  display: flex; // Make flexbox
  flex: auto; // Automatically flex content (allow shrink & grow)
  flex-flow: row; // Flow items horizontally in a row
  align-items: center; // Vertically align the items to center
  justify-content: flex-end; // Align content to the end of the container

  // buttons inside the nav bar
  .button {
    padding: 0.75em; // Apply a padding of 0.75em all around the button
    border-radius: 0.1em; // Slightly less rounding on these buttons
  }
}

// Only apply when screen width hits 1150px
@media all and (max-width: 1190px) {
  /* 
    On smaller displays the header is swapped
    to a centered column layout where the content
    goes down instead of across
  */

  // The header element
  header {
    flex-flow: column; // Flow items vertically
    text-align: center; // Align text to center
    padding: 1em 2em; // Decrease padding size for smaller screen
  }

  // The logo element
  .logo {
    width: 100%; // Allow the logo to span the full width
    max-width: 500px; // Don't let the logo go larger than 500px wide
    margin: 0 auto; // Remove vertical margins but auto horizontal margins to align center
  }

  // the navigation bar
  nav {
    justify-content: center; // Make the nav children centered
    margin-top: 1em; // Slight margin on the top to create a gap between the logo
    flex-wrap: wrap; // Allow the content to wrap
  }
}
</style>
