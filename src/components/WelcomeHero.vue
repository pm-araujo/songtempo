<template>
  <section class="Hero">
    <div class="Hero-radialPulse" :style="radialAnimation"></div>

    <div class="Hero-wrapper u-marginTop--medium">
      <div class="Hero-welcomeMsg">
        Upload music file to see tempo stats
      </div>

      <div class="u-marginTop--medium">
        <button class="Button">
          <icon class="u-marginRight--xSmall" name="upload"></icon>
          <span>Upload</span>
        </button>
      </div>

      <div class="Hero-extensionTitle u-marginTop--xSmall">
        Supported extensions:
      </div>
      <small class="Hero-extensionList">MP3, WAV, OGG, ACC</small>

    </div>

  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        'appLoaded': false
      }
    },
    computed: {
      radialAnimation () {
        return {
          animationDuration: this.getBpm(),
          animationPlayState: this.appLoaded ? 'running' : 'paused'
        }
      }
    },
    methods: {
      ...mapGetters({
        getBpm: 'getBpmRadial'
      })
    },
    mounted () {
      this.$on('appLoaded', () => {
        this.appLoaded = true
      })
    }
  }
</script>

<style lang="scss">
</style>
