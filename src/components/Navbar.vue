<template>
  <header class="Navbar" @mouseover="hoverEnter" @mouseout="hoverLeave"
    @click="hoverState=!hoverState">

    <div class="Navbar-headerTitle" @mouseover.prevent @mouseout.prevent>

      <div :style="showControls" class="Navbar-logo">
        <div class="Navbar-logoText">Song</div>
        <div @click.stop="fasterBpm" class="Navbar-logoText u-marginTop--medium">Faster</div>
      </div>

      <div @click.stop="toggleBpmClick" class="Metronome u-marginLeft--xSmall">
        <img class="Metronome-base" src="~@/assets/imgs/metronome.svg">
        <img :style="metroAnimation" class="Metronome-pointer" src="~@/assets/imgs/metro-pointer.svg">
      </div>

      <div :style="showControlsRev" class="Navbar-logo Navbar-logo--alt">
        <div @click.stop="slowerBpm" class="Navbar-logoText Navbar-logoText--alt u-marginLeft--tiny">Slower</div>
        <div class="Navbar-logoText Navbar-logoText--alt u-marginTop--medium">Tempo</div>
      </div>
    </div>

    <span @click.stop="toggleBpmClick" ref="bpmCount" class="Navbar-bpmCount">{{bpm}} bpm</span>

    <span>
    </span>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        'appLoaded': false,
        'clickInterval': {},
        'hoverState': false
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
      },
      showControls () {
        return {
          transform: this.hoverState ? 'translateY(-80px)' : 'translateY(0px)'
        }
      },
      showControlsRev () {
        return {
          transform: this.hoverState ? 'translateY(5px)' : 'translateY(-80px)'
        }
      }
    },
    methods: {
      ...mapActions({
        incrementBpm: 'incrementBpm',
        decrementBpm: 'decrementBpm',
        toggleBpmClick: 'toggleBpmClick'
      }),
      fasterBpm (ev) {
        this.$refs.bpmCount.classList.add('Navbar-bpmCount--flash')
        setTimeout(() => {
          this.$refs.bpmCount.classList.remove('Navbar-bpmCount--flash')
        }, 300)
        this.incrementBpm()
      },
      slowerBpm (ev) {
        this.$refs.bpmCount.classList.add('Navbar-bpmCount--flash')
        setTimeout(() => {
          this.$refs.bpmCount.classList.remove('Navbar-bpmCount--flash')
        }, 300)
        this.decrementBpm()
      },
      hoverLeave (ev) {
        if (this.verifyMouseLeave(ev) && this.hoverState) {
          this.hoverState = false
        }
      },
      hoverEnter (ev) {
        if (!this.verifyMouseLeave(ev) && !this.hoverState) {
          this.hoverState = true
        }
      },
      verifyMouseLeave (ev) {
        return ev.target.className === this.$el.className
      }
    },
    watch: {
      bpmClickMuted () {
      }
    },
    mounted () {
      this.$on('appLoaded', () => {
        this.appLoaded = true
      })
    }
  }
</script>
