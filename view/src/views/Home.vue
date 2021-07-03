<template>
  <div class="min-w-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
    <div class="container mx-auto">
      <div class="flex flex-col min-h-screen py-8 px-3 md:px-0">
        <div class="flex-none">
          <div class="flex items-stretch w-20 md:w-48 h-20 bg-white rounded-full shadow-xl ml-5 md:ml-0"
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
        </div>

        <div class="flex-grow">
          <!--          md:pt-36 lg:pt-52 xl:pt-72 2xl:pt-80-->
          <div class="pt-24 grid md:grid-cols-2">
            <div>
              <div class="space-y-8">
                <div
                    class="block w-auto md:w-full break-words font-black text-2xl md:text-6xl ml-4">
                  <p class="leading-tight" style="color: #3a3d3e;">Sei dabei.</p>
                </div>

                <div class="block w-auto md:w-full break-words text-xl rounded-lg ml-4">
                  <p class="leading-tight" style="color: #3a3d3e;">
                    Lade dir die EffnerApp jetzt im Play Store herunter und erhalte immer die neusten Informationen.
                  </p>
                  <br>
                  <p class="leading-tight" style="color: #3a3d3e;">
                    Oder schau dir den Code an und hilf uns die App zu verbessern!
                  </p>
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

            <div class="flex justify-center">
              <div class="w-60 md:w-80 h-auto my-10 md:my-0">
                <div>
                  <vueper-slides class="no-shadow" fade :arrowsOutside="true" :bulletsOutside="true" :autoplay="true" :touchable="false" :slide-ratio="16/9">
                    <vueper-slide
                        v-for="(slide, i) in slides"
                        :key="i"
                        :image="slide.image"/>
                  </vueper-slides>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none">
          <div class="flex justify-center">
            <Footer style="color: #3a3d3e;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import Footer from "../components/Footer";

import github_badge from "../assets/github_badge.png"
import github_badge_elephant from "../assets/github_badge_elephant.png"

export default {
  name: 'Home',
  components: {
    VueperSlides,
    VueperSlide,
    Footer
  },
  data() {
    return {
      clickCount: 0,
      slides: [
        {
          image: require('../assets/screenshots/screen_home.png')

        },
        {
          image: require('../assets/screenshots/screen_subs.png')

        },
        {
          image: require('../assets/screenshots/screen_exams.png')

        },
        {
          image: require('../assets/screenshots/screen_mvv.png')

        },
        {
          image: require('../assets/screenshots/screen_timetable.png')
        },
        {
          image: require('../assets/screenshots/screen_settings.png')
        }
      ]
    }
  },
  methods: {
    clickLogo() {
      this.clickCount++
    }
  },
  computed: {
    githubBadge() {
      if (this.clickCount >= 10) {
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
