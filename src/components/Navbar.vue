<template>
  <header class="Navbar" @mouseover="peekControls(1)" @mouseleave="peekControls(0)"
    @click="openControls">
    <audio ref="clickSound" preload="true" src="static/sounds/click.mp3"></audio>

    <div class="Navbar-headerTitle">
      <div class="Text-orange u-marginLeft--small">Song</div>

      <div class="Metronome u-marginLeft--xSmall">
        <img class="Metronome-base" src="~@/assets/imgs/metronome.svg">
        <img :style="metroAnimation" class="Metronome-pointer" src="~@/assets/imgs/metro-pointer.svg">
      </div>

      <div class="u-marginLeft--xSmall">Tempo</div>
    </div>

    <span class="Navbar-bpmCount u-marginTop--tiny">{{bpm}} bpm</span>

    <span>
    </span>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import HighResolutionTimer from '../timer.js'

  export default {
    data () {
      return {
        'appLoaded': false,
        'clickInterval': {}
      }
    },
    computed: {
      ...mapGetters({
        bpm: 'getBpm',
        bpmMetro: 'getBpmMetronome',
        bpmClickMuted: 'getBpmClick'
      }),
      metroAnimation () {
        return {
          animationDuration: this.bpmMetro,
          animationPlayState: this.appLoaded ? 'running' : 'paused'
        }
      }
    },
    methods: {
      ...mapActions({
        peekControls: 'togglePeekControls',
        openControls: 'toggleOpenControls'
      }),
      clickToggle () {
        if (this.clickInterval.stop) this.clickInterval.stop()

        if (this.bpmClickMuted) return

        this.clickInterval = new HighResolutionTimer(60000 / this.bpm, () => {
          this.$refs.clickSound.currentTime = 0
          this.$refs.clickSound.play()
        })

        this.clickInterval.run()
      }
    },
    watch: {
      bpm () {
        this.clickToggle()
      },
      bpmClickMuted () {
        this.clickToggle()
      }
    },
    mounted () {
      this.$on('appLoaded', () => {
        this.appLoaded = true
      })
    }
  }
</script>
