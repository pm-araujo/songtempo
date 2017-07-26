<template>
  <section class="Hero">
    <div class="Hero-radialPulse" :style="radialAnimation"></div>

    <div class="Hero-wrapper u-marginTop--small">
      <div class="Hero-textTitle">
        Get Rhythm stats for your music
      </div>

      <div class="Hero-uploadZone u-marginTop--medium">
        <div class="Hero-uploadForm">
          <button class="Button">
            <icon name="upload"></icon>
            <span class="u-marginLeft--xSmall">Upload</span>
          </button>

          <aside>
            <div class="Hero-extensionTitle u-marginTop--xSmall">
              Supported extensions:
            </div>
            <small class="Hero-extensionList">MP3, WAV, OGG, ACC</small>
          </aside>
        </div>

        <div class="Hero-textTitle">
          Or
        </div>

        <div class="Hero-recordForm u-marginLeft--medium">
          <button class="Button">
            <icon name="microphone"></icon>
            <span class="u-marginLeft--xSmall">Record</span>
          </button>
        </div>

      </div>


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
