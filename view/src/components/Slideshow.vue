<template>
  <div class="w3-content w3-display-container">


    <img
        v-for="(i, slide) in $props.slides"
        :key="i" class="mySlides" src="img_snowtops.jpg" style="width:100%">
    <img class="mySlides" src="img_lights.jpg" style="width:100%">
    <img class="mySlides" src="img_mountains.jpg" style="width:100%">
    <img class="mySlides" src="img_forest.jpg" style="width:100%">

    <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
    <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  props: {
    slides: [String]
  }
}
</script>

<style scoped>

</style>
