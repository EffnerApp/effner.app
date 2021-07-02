<template>
  <div class="text-center">
    <span ref="copyright" />
    <span class="ml-10"><router-link to="/imprint">Impressum</router-link></span>
    <span class="ml-10"><router-link to="/privacy">Datenschutz</router-link></span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.$refs.copyright.textContent = '© ' + new Date().getFullYear() + ' EffnerApp'
  }
}
</script>

<style scoped>

</style>
