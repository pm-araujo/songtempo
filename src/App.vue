<template>
  <div id="app">

    <div :style="scrollTopVisible" ref="scrollTop" class="ScrollTop u-marginRight--small u-marginBot--small">
      <button class="ScrollTop-button">
        <icon name="arrow-up"></icon>
        <span class="u-marginLeft--xSmall">Try another file</span>
      </button>
    </div>

    <navbar ref="navbar"></navbar>

    <welcome-hero v-observe-visibility="toggleScrollTop" ref="welcomeHero"></welcome-hero>

    <meta-hero ref="meta" v-show="isMusicLoaded"></meta-hero>

    <stats-hero ref="stats" v-show="isMusicLoaded"></stats-hero>

    <footer class="Footer">

      <p class="u-marginBot--tiny">
        Released under the
        <a class="Footer-link" target="_blank"
          href="https://opensource.org/licenses/MIT">MIT License
        </a>
      </p>

      <div>
        Resources used by this page are
        <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank"
          class="Footer-link">
          Public Domain
        </a>
      </div>


      <div class="u-marginTop--tiny">
        Copyright &copy; 2017 Pedro Araújo
      </div>

      <a class="Footer-link" target="_blank" href="https://github.com/pm-araujo">
        <icon name="github" scale="2"></icon>
      </a>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import WelcomeHero from './components/WelcomeHero.vue'
import MetaHero from './components/MetaHero.vue'
import StatsHero from './components/StatsHero.vue'

require('smoothscroll-polyfill').polyfill()

import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      welcomeHeroVisible: false
    }
  },
  components: {
    'navbar': Navbar,
    'welcome-hero': WelcomeHero,
    'meta-hero': MetaHero,
    'stats-hero': StatsHero
  },
  computed: {
    ...mapGetters({
      isMusicLoaded: 'isMusicLoaded'
    }),
    scrollTopVisible () {
      return {
        transform: this.welcomeHeroVisible ? 'translateY(60px)' : 'translateY(0px)'
      }
    }
  },
  methods: {
    toggleScrollTop (isVisible, entry) {
      this.welcomeHeroVisible = isVisible
    }
  },
  mounted () {
    this.$refs.navbar.$emit('appLoaded')
    this.$refs.welcomeHero.$emit('appLoaded')

    this.$on('fileLoaded', function () {
      this.$refs.scrollTop.style.display = 'block'
      setTimeout(() => {
        this.$refs.meta.$el.scrollIntoView({
          behavior: 'smooth'
        })
      }, 500)
    })
  }
}
</script>

<style lang="scss">
@import "./stylesheets/global.scss";
</style>
