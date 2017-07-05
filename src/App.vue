<template>
  <div id="app">

    <navbar></navbar>

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
import Navbar from './components/Navbar.vue'
import WelcomeHero from './components/WelcomeHero.vue'

export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'welcome-hero': WelcomeHero
  },
  mounted () {
    this.$children[0].$emit('appLoaded')
    this.$children[1].$emit('appLoaded')
  }
}
</script>

<style lang="scss">
@import "./stylesheets/global.scss";
</style>
