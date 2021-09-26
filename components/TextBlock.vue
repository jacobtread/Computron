<template>
  <div
    :class="{
      block: true,
      'block--centered': centered, // Apply the block--centered class if centered is ture
      'block--iconified': icon, // Apply the block--iconified class if icon was provided
      'block--reversed': reversed, // Apply the block--reversed class if reversed is ture
    }"
  >
    <div :class="{ block__text: icon }">
      <h1>{{ title }}</h1>
      <p>
        <slot />
      </p>
      <div class="buttons">
        <slot name="buttons" />
      </div>
      <div class="extra">
        <slot name="extra" />
      </div>
    </div>
    <img
      v-if="icon"
      :src="require(`../assets/img/${icon}`)"
      :alt="iconName"
      width="16"
      height="16"
    />
  </div>
</template>

<script>
// Export the component with its name & properties
export default {
  name: "TextBlock",
  // Properties this component accepts
  props: {
    title: String,
    centered: Boolean,
    icon: String,
    reversed: Boolean,
    iconName: String,
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables";

// Defines styles for a centered text block
@mixin centered {
  text-align: center; // Align the text to center
  /* 
    Flow the content in a reversed column this will
    place the image at the top and the text at the bottom
    in a nice neat column
  */
  flex-flow: column-reverse;

  // Target the pseudo element before the title (h1)
  h1::before {
    left: 50%; // Place element half way accross parent
    transform: translateX(
      -50%
    ); // Move the element half its width back (aligns to center)
  }

  // The text content
  p {
    margin: 0 auto; // Align the fixed with to center with margins
    max-width: 600px; // Cap the text block width
  }

  // The buttons wrapper
  .buttons {
    justify-content: center; // Place the content in the center
  }
}

// The text block
.block {
  display: block; // Display the content as a block
  width: 100%; // Take up the full width
  padding: 0 1em; // Apply no vertical padding but 1em of horizontal padding
  text-align: left; // Align the text to the left

  // The title element of the text block
  h1 {
    display: inline-block; // Display as an inline block to keep its width while acting like a block
    position: relative; // This element needs to be relative positioning to be the parent of the underline
    color: black; // Set the text color to black
    margin-bottom: 0.9em; // Add a margin to the bottom 0.9x the font size

    // Target the pseudo element before the title (h1)
    &::before {
      /* 
        This pseudo element is used to create the 
        underline effect that is under the title
      */
      content: ""; // Give it an empty content
      position: absolute; // Set its position to absolute
      left: 0; // Put it all the way to the left of the parent
      top: 120%; // Put it at the bottom +20% of the parent
      width: 80%; // Make it 80% of the parent width
      height: 4px; // Make the line only 4px
      background-color: $primary; // Set its fill color to the primary (blue) colour
    }
  }

  // (.block__text) The text portion of the block if its an icon block
  &__text {
    flex: auto; // Automatically flex this box
    max-width: 500px; // Max the width of this box to 500px
  }

  // The icon image
  img {
    max-height: 200px; // Max the height of the image to 200px
    width: auto; // Automatically set the width
    height: auto; // Automatically set the height
  }

  // (.block--iconified) Applied if this block has an icon
  &--iconified {
    display: flex; // Display the content as a flexbox
    flex-flow: row; // Flex the content horizontally
    align-items: center; // Vertically align the content to center
    justify-content: space-between; // Space between the icons and text block
  }

  // (.block--reversed) Applied if this block should be reversed
  &--reversed {
    flex-flow: row-reverse; // The same as row but goes in reverse
    text-align: right; // Align the text to the right

    // Target the pseudo element before the title (h1)
    h1::before {
      left: auto; // Align the left automatically
      right: 0; // Place at the right of the element
    }

    // The buttons wrapper
    .buttons {
      justify-content: flex-end; // Place the content at the end of the flexbox (the right)
    }
  }

  &--centered {
    // Include the styles for a centered block
    @include centered();
  }
}

// The button wrapper
.buttons {
  display: flex; // Display the buttons as a flexbox
  flex-flow: row; // Flex the items in a row
  flex-wrap: wrap; // Allow the items to wrap
  margin-top: 1em; // Add a margin of 1x the font size to the top
}

// The extra content link elements
.extra a {
  display: block; // Display the text as its own block
  color: $extra-link-colour; // Set the text colour
  margin-top: 1.5em; // Apply a margin to the top
}

@media screen and (max-width: 700px) {
  /* 
    On smaller displays (less than 700px wide) all text
    blocks are converted to centered text blocks
  */
  // The block element
  .block {
    // Include the styles for a centered block
    @include centered();
  }
}
</style>
