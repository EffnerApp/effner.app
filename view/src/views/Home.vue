<template>
  <div class="min-w-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
    <div class="container mx-auto">
      <div class="flex flex-col min-h-screen py-8">
        <div class="flex-none">
          <div class="w-20 h-20 p-4 bg-white rounded-lg shadow-xl">
            <img src="../assets/logo.png" alt="logo">
            <!-- WIR BRAUCHEN UNBEDINGT EIN QUADRATISCHES LOGO -->
          </div>
        </div>

        <div class="flex-grow">
          <div class="flex space-x-6 items-center">
            <div class="">
              <div class="space-y-3">
                <div class="font-medium text-7xl">
                  <p>Nur für Android! Fu iOS</p>
                </div>

                <div class="w-64 h-64 badge">
                  <a href='https://play.google.com/store/apps/details?id=de.effnerapp.effner'>
                    <img alt='Jetzt bei Google Play'
                         src='https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png'/>
                  </a>
                </div>
              </div>
            </div>

            <div class="``">
              <div class="mx-auto">
                <div>
                  asdasd
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none">
          <div>
            Footer here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.box {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.badge {
  transform: translateX(-1rem);
}
</style>
