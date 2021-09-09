<template>
  <div class="blocks">
    <TextBlock title="Get in contact" centered>
      <template>
        You can get in touch with us via email to arrange a meeting to either learn more about Computron Or you can just
        email us about any concerns, interests or issues you have with Computron we will get back to you as soon as
        possible.
      </template>
      <template #buttons>
        <a class="button email-button" href="mailto:jsoh@computron.co.nz">Email</a>
      </template>
      <template #extra>
        <a class="email" href="mailto:jsoh@computron.co.nz">josh@computron.co.nz</a>
      </template>
    </TextBlock>

    <IconBlock title="Remote Support" icon="support.svg" icon-name="Support Icon">
      <template>
        If you need help with your devices we may be able to help your remotely. We have an easy to use tutorial to help
        you get setup before we help you remotely this tutorial is intended to be followed before contacting us in order
        to help speed up the process of us helping you
      </template>
      <template #buttons>
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


<style scoped lang="sass">

.email-button
  padding: 1em 4em

</style>
