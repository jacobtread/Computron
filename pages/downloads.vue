<template>
  <div>
    <div class="blocks">
    <!-- The title text block -->
    <TextBlock title="Quick Access" centered>
      Here are some quick links to different categories clicking them will take
      you to the portion of the page that contains the related download links
    </TextBlock>
    </div>
    <!-- The navigation button list -->
    <nav id="nav">
      <!-- Adds a button for every category inside categories -->
      <button
        v-for="category in categories"
        :key="category.id"
        class="button ignore-active"
        :data-category="category.id"
      >
        {{ category.title }}
      </button>
    </nav>
    <!-- For each of the categories add a block -->
    <div v-for="(category, index) in categories" :key="index" :id="category.id">
      <div class="title-wrapper">
        <!-- The category title -->
        <h1 class="title">{{ category.title }}</h1>
      </div>
      <div class="downloads">
        <!-- Add a block with each of the children -->
        <div
          class="downloads__block"
          v-for="(item, index) in category.children"
          :key="index"
        >
          <div class="downloads__block__text">
            <!-- The name of the download -->
            <h2>{{ item.name }}</h2>
            <!-- The description of the download -->
            <p>
              {{ item.description }}
            </p>
          </div>
          <!-- A link to the download that will open in a new tab -->
          <a class="button" :href="item.link" rel="noreffer" target="_blank"
            >View Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import TextBlock from "~/components/TextBlock.vue";

export default {
  components: { TextBlock },
  // Method for providing data when being server-side rendered
  async asyncData(c: Context /* The nuxt context */) {
    // Fetch the data using nuxt content and use it as data
    return await c.$content("downloads").fetch();
  },
  // Hook for when the component is added to the DOM
  mounted() {
    const elements: NodeListOf<Element> =
      document.querySelectorAll("#nav .button"); // Get all of the nav buttons
    for (let i = 0; i < elements.length; i++) {
      // Iterate over the nav buttons
      const element: HTMLElement = elements[i] as HTMLElement;
      const category: string = element.getAttribute("data-category")!;
      const target: HTMLElement = document.querySelector(`#${category}`)!;
      element.onclick = () => target.scrollIntoView({ behavior: "smooth" });
    }
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables";

// The navigation list
nav {
  display: flex; // Display as a flexbox
  flex-flow: row; // Flow the contents into a row
  flex-wrap: wrap; // Allow the content to wrap if it becomes too large

  justify-content: center; // Align the nav contents to center

  max-width: 1200px; // Max the nav size to 1200px wide
  margin: 0 auto; // Align the nav to center

  // Buttons within the nav
  .button {
    margin: 0.5em 1em; // Add margin around the buttons to space them evenly
  }
}

// Wrapper for the title to make it centered
.title-wrapper {
  display: block; // Display as a block
  text-align: center; // Align the text to center
}

// The category title
.title {
  position: relative; // This element needs to be relative positioning to be the parent of the underline
  display: inline-block; // Display as an inline block to keep its width while acting like a block

  // Include the underline mixin for the blue underline
  @include underline();
}

.downloads {
  display: flex; // Display as a flexbox
  flex-flow: row; // Flow the contents into a row
  flex-wrap: wrap; // Allow the content to wrap if it becomes too large
  align-items: stretch;
  justify-content: center; // Align the content to the center
  text-align: center; // Align the text to center
  margin: 2em; // Add a 2x the font size margin around the box
  &__block {
    padding: 1.5em;
    border: 2px solid #eeeeee;
    border-radius: 0.25em;
    display: flex;
    flex-flow: column;
    flex: auto; // Automatically flex this box
    max-width: calc(100% / 4); // Set the box width to 1/4 of the page
    min-width: 300px; // Don't let the box go smaller than 300px
    margin: 3em 1em; // Large margin on top and bottom to create good spacing and small left&right

    &__text {
      flex: auto;
      // The download title
      h2 {
        margin-bottom: 1em; // Some margin under the text so its not too close
      }
    }
    // The download link
    .button {
      display: inline-block;
      justify-self: flex-end;
      margin: 1em 0 0;
    }
  }
}
@media all and (max-width: 365px) {
  nav .button {
    width: 100%;
    display: block;
  }

  .downloads {
    margin: 1em;
  }

  .downloads__block {
    width: 100%;
    min-width: auto;
    max-width: 100%;
  }
}
</style>
