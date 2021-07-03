<template>
  <div class="min-w-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
    <div class="container mx-auto">
      <div class="flex flex-col min-h-screen py-8 px-3 md:px-0">
        <div class="flex-none">
          <div class="flex items-stretch w-20 md:w-48 h-20 bg-white rounded-full shadow-xl ml-5 md:ml-0" @click="clickLogo">
            <div class="self-center">
              <div class="w-20 h-20 p-4">
                <img alt="EffnerApp Logo" src="../assets/logo.png">
              </div>
            </div>
            <div class="invisible md:visible self-center font-medium text-xl pr-8">
              <p>EffnerApp</p>
            </div>
          </div>
        </div>

        <div class="flex-grow">
          <div class="pt-24 md:pt-36 lg:pt-52 xl:pt-72 2xl:pt-80 grid md:grid-cols-2">
            <div>
              <div class="space-y-4">
                <div class="block w-auto md:w-full break-words font-medium text-2xl md:text-7xl text-center md:text-inherit">
                  <p>Die EffnerApp!</p>
                </div>

                <div class="flex w-auto md:w-full">
                  <div class="w-auto md:w-64">
                    <a href="https://play.google.com/store/apps/details?id=de.effnerapp.effner">
                      <img alt="Jetzt bei Google Play" class="drop-shadow"
                           src="https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png"/>
                    </a>
                  </div>
                  <div class="w-auto md:w-64">
                    <a href="https://github.com/EffnerApp/EffnerApp">
                      <img alt="Mach mit bei GitHub" class="drop-shadow" :src="githubBadge"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-center">
                <div>
                  Slideshow
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
import Slideshow from "../components/Slideshow";

import Screenshot1 from '../assets/screenshots/1.png'
import Screenshot2 from '../assets/screenshots/2.png'
import Screenshot3 from '../assets/screenshots/3.png'
import Screenshot4 from '../assets/screenshots/4.png'
import Screenshot5 from '../assets/screenshots/5.png'
import github_badge from "../assets/github_badge.png"
import github_badge_elephant from "../assets/github_badge_elephant.png"

export default {
  name: 'Home',
  components: {
    Footer,
    Slideshow
  },
  data() {
    return {
      clickCount: 0,
      screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5]
    }
  },
  methods: {
    clickLogo() {
      this.clickCount++
    }
  },
  computed: {
    githubBadge() {
      if(this.clickCount >= 10) {
        return github_badge_elephant;
      }

      return github_badge;
    }
  }
}
</script>

<style scoped>
.drop-shadow {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.4));
}

</style>
