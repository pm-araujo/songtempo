<template>
  <div id="app">
    <header class="Navbar">
      <audio ref="clickSound" preload="true" muted src="static/sounds/click.mp3"></audio>
      <h1 class="MainHeader">
        <span class="Text-orange">Song</span>
        <div class="Metronome">
          <img class="Metronome-base" src="~@/assets/imgs/metronome.svg">
          <img class="Metronome-pointer" src="~@/assets/imgs/metro-pointer.svg">
        </div>
        <span>Tempo</span>
      </h1>
    </header>

    <welcome-hero></welcome-hero>

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
import WelcomeHero from './components/WelcomeHero.vue'

export default {
  name: 'app',
  components: {
    'welcome-hero': WelcomeHero
  },
  mounted () {
    // TODO: init animations

    setInterval(() => {
      this.$refs.clickSound.currentTime = 0
      this.$refs.clickSound.play()
    }, 500)
  }
}
</script>

<style lang="scss">
@import "./stylesheets/global.scss";
</style>
