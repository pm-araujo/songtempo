<template>
  <header class="Navbar" @mouseover="peekControls(1)" @mouseleave="peekControls(0)"
    @click="openControls">
    <audio ref="clickSound" preload="true" muted src="static/sounds/click.mp3"></audio>

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

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        bpm: 'getBpm',
        bpmMetro: 'getBpmMetronome'
      }),
      metroAnimation () {
        return {
          animationDuration: this.bpmMetro
        }
      }
    },
    methods: {
      ...mapActions({
        peekControls: 'togglePeekControls',
        openControls: 'toggleOpenControls'
      })
    },
    mounted () {
      // TODO: init animations
      /*
      setInterval(() => {
        this.$refs.clickSound.currentTime = 0
        this.$refs.clickSound.play()
      }, 500)
      */
    }
  }
</script>
