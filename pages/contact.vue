<template>
  <div class="blocks">
    <!-- The welcome block -->
    <TextBlock title="Get in contact" centered>
      <template>
        <!-- The text content for the block -->
        You can get in touch with us via email to arrange a meeting to either
        learn more about Computron Or you can just email us about any concerns,
        interests or issues you have with Computron we will get back to you as
        soon as possible.
      </template>
      <template #buttons>
        <!-- The buttons block for additional buttons -->
        <a class="button" href="mailto:jsoh@computron.co.nz">Email</a>
      </template>
      <template #extra>
        <!-- Additional text area -->
        <a href="mailto:jsoh@computron.co.nz">josh@computron.co.nz</a>
      </template>
    </TextBlock>
    <!-- The remote support block (with icon) -->
    <TextBlock
      title="Remote Support"
      icon="support.svg"
      icon-name="Support Icon"
    >
      <template>
        <!-- The text content for the block -->
        If you need help with your devices we may be able to help your remotely.
        We have an easy to use tutorial to help you get setup before we help you
        remotely this tutorial is intended to be followed before contacting us
        in order to help speed up the process of us helping you
      </template>
      <template #buttons>
        <!-- The buttons block for additional buttons -->
        <NuxtLink to="/tutorials/support-setup" class="button">
          Get Support
        </NuxtLink>
      </template>
    </TextBlock>
  </div>
</template>
<script>
// Import the text block component
import TextBlock from "~/components/TextBlock.vue";

export default { components: { TextBlock } }; // Use the text block component
</script>
