<template>
  <section class="Hero">
    <div class="Hero-radialPulse" :style="radialAnimation"></div>

    <div :class="bpmControlsClass" class="Hero-bpmWrapper">
      <div class="Hero-bpmControls">
        <button class="Button" @click="incrementBpm">Faster</button>
        <button class="Button" @click="decrementBpm">Slower</button>
        <button class="Button Button--roundBot" @click="openControls">
          <icon :name="this.bpmControls === 2 ? 'angle-up' : 'angle-down'"></icon>
        </button>
      </div>
    </div>

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

    <div class="Hero-footer u-marginTop--large">

      <div class="Hero-controls">
      </div>

    </div>

  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        bpmControls: 'getControlsState'
      }),
      bpmControlsClass () {
        return {
          'Hero-bpmWrapper--hidden': this.bpmControls === 0,
          'Hero-bpmWrapper--peek': this.bpmmControls === 1,
          'Hero-bpmWrapper--open': this.bpmControls === 2
        }
      },
      radialAnimation () {
        return {
          animationDuration: this.getBpm()
        }
      }
    },
    methods: {
      ...mapGetters({
        getBpm: 'getBpmRadial'
      }),
      ...mapActions({
        incrementBpm: 'incrementBpm',
        decrementBpm: 'decrementBpm',
        peekControls: 'togglePeekControls',
        openControls: 'toggleOpenControls'
      })
    }
  }
</script>

<style lang="scss">
</style>
