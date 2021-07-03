<template>
  <div class="text-center">
    <span class="px-4" ref="copyright" />
    <span class="pl-4 pr-3"><a class="underline" href="https://status.effner.app" target="_blank">Status</a></span>
    <span class="px-3"><router-link class="underline" to="/imprint">Impressum</router-link></span>
    <span class="px-3"><a class="underline" href="https://go.effner.app/privacy" target="_blank">Datenschutz</a></span>
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

