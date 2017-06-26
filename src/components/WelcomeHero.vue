<template>
  <section class="Hero">
    <div class="Hero-radialPulse"></div>
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
        <button class="Button">
          <icon name="music"></icon>
        </button>

        <button class="Button u-marginLeft--xSmall">Fast</button>

        <button class="Button u-marginLeft--xSmall">Slow</button>
      </div>

    </div>

  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
</style>
