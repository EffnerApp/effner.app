<template>
  <div class="text-center">
    <span ref="copyright" class="px-3 break-all"/>
    <br>
    <span class="px-3"><a class="underline" href="https://status.effner.app" rel="noopener" target="_blank">Status</a></span>
    <span class="px-3"><router-link class="underline" to="/imprint">Impressum</router-link></span>
    <span class="px-3"><router-link class="underline" to="/privacy">Datenschutz</router-link></span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.$refs.copyright.textContent = '© ' + new Date().getFullYear() + ' EffnerApp von Sebastian Müller & Luis Bros'
  }
}
</script>

<style scoped>

</style>

