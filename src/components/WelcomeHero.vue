<template>
  <section class="WelcomeHero" :style="radialAnimation">

    <audio ref="clickSound" preload="true" src="static/sounds/click.mp3"></audio>

    <div class="WelcomeHero-wrapper u-marginTop--small">
      <div class="WelcomeHero-textTitle">
        Get Rhythm stats for your music
      </div>

      <div class="WelcomeHero-uploadZone u-marginTop--medium">
        <div class="WelcomeHero-uploadForm">
          <label class="Button">
            <input type="file" class="WelcomeHero-uploadHidden" @change="fileChanged"
              :accept="acceptedFormats"/>
            <icon name="upload"></icon>
            <span class="u-marginLeft--xSmall">Upload</span>
          </label>

          <aside>
            <div class="WelcomeHero-extensionTitle u-marginTop--tiny">
              Supported extensions:
            </div>
            <div ref="extList" class="WelcomeHero-extensionList u-marginTop--tiny">MP3, WAV, OGG, AAC</div>
          </aside>
        </div>

        <div class="WelcomeHero-textTitle">
          Or
        </div>

        <div class="WelcomeHero-recordForm u-marginLeft--medium">
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
  import { mapGetters, mapActions } from 'vuex'

  const audioTypes = 'audio/mp3,audio/ogg,audio/wav,audio/aac'

  export default {
    data () {
      return {
        'appLoaded': false
      }
    },
    computed: {
      ...mapGetters({
        bpmClickMuted: 'getBpmClick'
      }),
      radialAnimation () {
        return {
          animationDuration: this.getBpm(),
          animationPlayState: this.appLoaded ? 'running' : 'paused'
        }
      },
      acceptedFormats () {
        return audioTypes
      }
    },
    methods: {
      ...mapGetters({
        getBpm: 'getBpmRadial',
        isMusicLoaded: 'isMusicLoaded'
      }),
      ...mapActions({
        setMusicLoaded: 'setMusicLoaded'
      }),
      playClick () {
        this.$refs.clickSound.currentTime = 0
        this.$refs.clickSound.play()
      },
      fileChanged (ev) {
        let file = ev.path[0].files[0]

        if (!audioTypes.includes(file.type)) {
          // Flash red extensions
          this.$refs.extList.classList.add('WelcomeHero-extensionList--alert')
          setTimeout(() => {
            this.$refs.extList.classList.remove('WelcomeHero-extensionList--alert')
          }, 1000)
        } else {
          this.setMusicLoaded(true)
          this.$parent.$emit('fileLoaded')
        }
      }
    },
    watch: {
      bpmClickMuted (val) {
        if (!val) {
          this.$refs.radial.addEventListener('animationiteration', this.playClick)
        } else this.$refs.radial.removeEventListener('animationiteration', this.playClick)
      }
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
