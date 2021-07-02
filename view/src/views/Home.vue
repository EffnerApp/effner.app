<template>
  <div class="min-w-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
    <div class="container mx-auto">
      <div class="flex flex-col min-h-screen py-8 px-3 md:px-0">
        <div class="flex-none">
          <div class="w-20 h-20 p-4 bg-white rounded-lg shadow-xl">
            <img alt="logo" src="../assets/logo.png">
            <!-- WIR BRAUCHEN UNBEDINGT EIN QUADRATISCHES LOGO -->
          </div>
        </div>

        <div class="flex-grow">
          <div class="pt-24 md:pt-36 lg:pt-52 xl:pt-72 2xl:pt-80 grid md:grid-cols-2">
            <div class="">
              <div class="space-y-3">
                <div class="block w-screen md:w-full break-words font-medium text-2xl md:text-7xl">
                  <p>Nur für Android! yeyeye Was geht break</p>
                </div>

                <div class="flex w-screen md:w-full">
                  <div class="w-64 badge">
                    <a href='https://play.google.com/store/apps/details?id=de.effnerapp.effner'>
                      <img alt='Jetzt bei Google Play' class="drop-shadow"
                           src='https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png'/>
                    </a>
                  </div>
                  <div class="w-64 badge">
                    <a href="https://github.com/EffnerApp/EffnerApp">
                      <img alt="Mach mit bei GitHub" class="drop-shadow" src="../assets/github_badge.png"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="flex justify-center">
                <div>
                  Hier coole bilder einfügen
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none">
          <div class="flex justify-center">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style scoped>
.badge {
  transform: translateX(-1rem);
}

.drop-shadow {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.4));
}

</style>
