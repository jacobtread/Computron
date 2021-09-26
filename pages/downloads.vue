<template>
  <div>
    <TextBlock title="Quick Access" centered>
      Here are some quick links to different categories clicking them will take
      you to the portion of the page that contains the related download links
    </TextBlock>
    <nav id="nav">
      <button
        v-for="(category, index) in categories"
        :key="index"
        class="button ignore-active"
        :data-category="category.id"
      >
        {{ category.title }}
      </button>
    </nav>
    <div class="blocks">
      <div
        v-for="(category, index) in categories"
        :key="index"
        :id="category.id"
      >
        <div class="title__wrapper">
          <h1 class="title">{{ category.title }}</h1>
        </div>
        <div class="blocks padded">
          <TextBlock
            v-for="(item, index) in category.children"
            :key="index"
            :title="item.name"
          >
            {{ item.description }}
            <template #buttons>
              <a
                :href="item.link"
                rel="noreferrer"
                target="_blank"
                class="button"
              >
                View Download
              </a>
            </template>
          </TextBlock>
        </div>
      </div>
    </div>
    <button
      class="button--top button"
      id="topButton"
      v-on:click="scrollTo('header')"
    >
      Back to top ^
    </button>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import TextBlock from "../components/TextBlock.vue";

export default {
  components: { TextBlock },
  async asyncData(context: Context) {
    const $content = context.$content;
    return await $content("downloads").fetch(); // Give view access to the data
  },
  mounted() {
    function scrollTo(tag: string) {
      (document.querySelector(tag) as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }

    const elements = document.querySelectorAll(".nav > *");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.onclick = () => {
        scrollTo("#" + element.getAttribute("data-category"));
      };
    }

    const topButton: HTMLElement =
      document.getElementById(
        "topButton"
      ) as HTMLElement; /* Assert top button will not be null */

    function updateTopButton(): void {
      if (document.documentElement.scrollTop > 300) {
        topButton.classList.add("button--top--active");
      } else {
        topButton.classList.remove("button--top--active");
      }
    }
    document.addEventListener("scroll", updateTopButton);
    updateTopButton();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables";

nav {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;

  justify-content: center;

  max-width: 1200px;
  margin: 0 auto;

  .button {
    margin: 0.5em 1em;
  }
}

.padded {
  grid-gap: 3em;
}

.title {
  position: relative;
  display: inline-block;
  text-align: center;

  &__wrapper {
    display: block;
    text-align: center;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 120%;
    width: 80%;
    height: 4px;
    background-color: $primary;
  }
}
.button--top {
  position: fixed;
  bottom: 2em;
  right: 2em;
  z-index: 0;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s ease;

  &--active {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
