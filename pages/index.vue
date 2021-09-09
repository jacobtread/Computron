<template>
  <div class="blocks">
    <TextBlock title="Welcome to Computron" centered>
      <b>Computron</b> is a place where you can find all the tools you need and even some you don't. Here we provide you
      with links to lots of useful software however we also provide in-person services, training, and repairs to machine
      networking and other hardware. You can find useful information by navigating through the menus in the navigation
      bar
      at the top of this site.
    </TextBlock>

    <IconBlock title="Downloads" icon="download.svg" icon-name="Download Icon">
      <template v-slot:default>
        We have a large selection of free and powerful software from everyday helpful tools to ISO images for installing
        operating systems we’ve got downloads for everything all in one place
      </template>
      <template v-slot:buttons>
        <NuxtLink to="/downloads" class="button">
          View Downloads
        </NuxtLink>
      </template>
    </IconBlock>

    <IconBlock title="Tutorials" icon="tutorials.svg" icon-name="Tutorials Icon" reversed>
      <template v-slot:default>
        On the tutorials page of our website you will find helpful tutorials to setup certain software and get the best
        out of your computer and the software that you are running on it
      </template>
      <template v-slot:buttons>
        <NuxtLink to="/tutorials" class="button">
          View Tutorials
        </NuxtLink>
      </template>
    </IconBlock>

    <IconBlock title="Remote Support" icon="support.svg" icon-name="Support Icon">
      <template v-slot:default>
        We have an easy to use tutorial to help you get setup before we help you remotely this tutorial is intended to
        be
        followed before contacting us in order to help speed up the process of us helping you
      </template>
      <template v-slot:buttons>
        <NuxtLink to="/support" class="button">
          Get Support
        </NuxtLink>
      </template>
    </IconBlock>

  </div>
</template>

<script lang="ts">

import IconBlock from "~/components/IconBlock.vue"
import TextBlock from "~/components/TextBlock.vue"

export default {
  components: {
    IconBlock,
    TextBlock
  }
}

</script>
