<template>
  <div
      class="flex items-stretch w-20 md:w-48 h-20 bg-white rounded-full shadow-xl ml-5 md:ml-0 cursor-pointer select-none"
      @click="clickLogo">
    <div class="self-center">
      <div class="w-20 h-20 p-4">
        <img alt="EffnerApp Logo" src="../assets/logo.png">
      </div>
    </div>
    <div class="invisible md:visible self-center font-medium text-xl pr-8">
      <p style="color: #3a3d3e;">EffnerApp</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    clickLogo() {
      this.$router.push({name: "Home"})
    }
  }
}
</script>
