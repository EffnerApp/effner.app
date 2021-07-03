<template>
  <div class="text-center">
    <span ref="copyright" />
    <span class="ml-10"><a href="https://go.effner.app/imprint">Impressum</a></span>
    <span class="ml-10"><a href="https://go.effner.app/privacy">Datenschutz</a></span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.$refs.copyright.textContent = '© ' + new Date().getFullYear() + ' EffnerApp with ❤️ by Sebi & Luis'
  }
}
</script>

<style scoped>

</style>

