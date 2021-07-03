<template>
  <div class="slide-container">
    <div class="w-64 h-64">
    <img ref="img"
         alt="Slide"
        :src="this.slides[this.slideIndex]">
    </div>

    <button ref="prev" type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg button-left invisible" @click="prev">
      &#10094;
    </button>

    <button ref="next" type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg button-right" @click="next">
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  props: {
    slides: []
  },
  created() {
    console.log(this.slides)
  },
  data() {
    return {
      slideIndex: 0
    }
  },
  methods: {
    next() {
      if (this.slideIndex < this.slides.length - 1) {
        this.slideIndex++
        this.$refs.prev.classList.remove('invisible')
        this.$refs.img.src = this.slides[this.slideIndex]

        if(this.slideIndex === this.slides.length - 1) {
          this.$refs.next.classList.add('invisible')
        }
      }
    },
    prev() {
      if (this.slideIndex >= 1) {
        this.slideIndex--
        this.$refs.next.classList.remove('invisible')
        this.$refs.img.src = this.slides[this.slideIndex]

        if(this.slideIndex === 0) {
          this.$refs.prev.classList.add('invisible')
        }
      }
    }
  }
}
</script>

<style scoped>

.button-left {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(0%, -50%);
}

.button-right {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0%, -50%);
}
.slide-container {
  position: relative;
}
</style>
