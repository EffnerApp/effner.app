<template>
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
              <img alt="Mach mit bei GitHub" class="drop-shadow" src="../assets/github_badge.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-60 md:w-80 h-auto my-10 md:my-0">
        <div>
          <vueper-slides :arrowsOutside="true" :autoplay="true" :bulletsOutside="true" :slide-ratio="16/9"
                         :touchable="false"
                         class="no-shadow" fade>
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"/>
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {VueperSlide, VueperSlides} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Home',
  components: {
    VueperSlides,
    VueperSlide,
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
  }
}
</script>

<style scoped>
.drop-shadow {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.4));
}
</style>
