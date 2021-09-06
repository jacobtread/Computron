<template>
  <img :src="require(`../assets/img/${image}`)" :alt="alt">
</template>

<script>
export default {
  name: "ImageBlock",
  props: {
    image: String,
    alt: String
  }
}
</script>

<style scoped lang="sass">
  img
    display: block
    width: 100%
</style>