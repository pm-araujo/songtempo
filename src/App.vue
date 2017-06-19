<template>
  <div id="app">
    <header class="NavHeader">
      <h1 class="MainHeader">
        <span class="Text-orange">Song</span> Tempo
      </h1>
    </header>

    <welcome-hero></welcome-hero>

    <footer class="Footer">
      <p class="Footer-license u-marginBottom--xSmall">
        Released under the
        <a class="Footer-link" target="_blank"
          href="https://opensource.org/licenses/MIT">MIT License
        </a>
      </p>

      <p class="Footer-copyright u-marginBottom--xSmall">
        Copyright &copy; 2017 Pedro Araújo
      </p>

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
  }
}
</script>

<style lang="scss">
@import "./stylesheets/global.scss";

.NavHeader {
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  padding-top: $Theme-size-xSmall;
  padding-bottom: $Theme-size-small;
  text-align: center;
}

.MainHeader {
  @include font-properties(title, desktop, title);

  color: $Theme-color-dark;
  margin: 0;
}

.Footer {
  @include font-properties(small);

  align-items: center;
  background: $Theme-color-dark;
  color: $Theme-color-light;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $Theme-size-xSmall;
  width: 100%;
}

.Footer-copyright {
  margin: 0;
}

.Footer-link {
  color: inherit;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
}

</style>
