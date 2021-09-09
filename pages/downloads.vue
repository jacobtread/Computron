<template>
  <div>
    <TextBlock title="Quick Access" centered>
      Here are some quick links to different categories clicking them will take you to the portion of the page that
      contains the related download links
    </TextBlock>
    <nav class="nav" id="nav">
      <button v-for="(category, index) in categories"
              :key="index"
              class="button ignore-active"
              :data-category="category.id"
      >{{ category.title }}
      </button>
    </nav>
    <div class="blocks">
      <div v-for="(category, index) in categories" :key="index" :id="category.id">
        <h1>{{ category.title }}</h1>
        <TextBlock v-for="(item, index) in category.children" :key="index" :title="item.name">
          {{ item.description }}
          <template v-slot:buttons>
            <a :href="item.link" rel="noreferrer" target="_blank" class="button">
              View Download
            </a>
          </template>
        </TextBlock>
      </div>
    </div>
    <button class="button--top button" v-on:click="scrollTo('header')">Back to top ^</button>
  </div>
</template>

<script lang="ts">
import TextBlock from "../components/TextBlock";

export default {
  components: {TextBlock},
  async asyncData({$content}) {
    const {categories} = await $content('downloads')
      .fetch()
    return {
      categories
    }
  },
  methods: {
    scrollTo(tag) {
      document.querySelector(tag).scrollIntoView();
    }
  },
  mounted() {
    const elements: NodeListOf = document.querySelectorAll('.nav > *');
    for (let i = 0; i < elements.length; i++) {
      const element: HTMLElement = elements[i];
      element.onclick = () => {
        this.scrollTo('#' + element.getAttribute('data-category'))
      }
    }
  }
}


</script>

<style scoped lang="sass">

.nav
  display: flex
  flex-flow: row
  justify-content: center

  ::v-deep .button
    margin: 0 1em

.button--top
  position: fixed
  top: 0
  right: 0
  z-index: 0
  cursor: pointer

</style>
