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
    const elements = document.querySelectorAll("#nav .button");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const category: string = element.getAttribute("data-category")!;
      const target: HTMLElement = document.querySelector(`#${category}`)!;
      element.onclick = () => {
        target.scrollIntoView({behavior: "smooth"})
      };
    }
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
</style>
