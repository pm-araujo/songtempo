<template>
  <section class="Hero">

    <span class="Pulser"></span>
    <div class="Hero-wrapper">
      <div class="Hero-welcomeMsg">
        Upload music file to see tempo stats
      </div>

      <div class="u-marginTop--medium">
        <button class="Hero-uploadButton">
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
  export default {

  }
</script>

<style lang="scss">
@import "../stylesheets/global.scss";

.Hero {
  @include font-properties(base);

  align-items: center;

  background-color: $Theme-color-main;
  background-size: cover;
  background-image: url("../assets/hero_cover.jpg");
  background-repeat: no-repeat;
  background-position: bottom;

  &:before {
    content: '';
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
    background-image: linear-gradient(to bottom,#002f4b,$Theme-color-main);
    opacity: 0.6;
  }

  display: flex;
  color: $Theme-color-light;
  flex-direction: column;
  justify-content: center;
  padding: 200px 100px;
  position: relative;
  width: 100%;
}

.Hero-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
}
.Hero-welcomeMsg {
  @include font-properties(title);
  font-weight: 600;
}

.Hero-extensionTitle {
  @include font-properties(base);
}

.Hero-extensionList {
  @include font-properties(smaller);
  font-weight: 600;
}

.Hero-uploadButton {
  @include font-properties(base);
  background: $Theme-color-light;
  border: 0;
  color: $Theme-color-dark;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: $Theme-size-tiny;
  padding-left: $Theme-size-xSmall;
  padding-right: $Theme-size-xSmall;

  &:hover {
    opacity: .8;
  }
}

.Pulser {
  align-items: center;
  //background: rgba(41, 42, 45, 0.8);
  border-radius: 50%;
  border: 10px solid rgba(41, 42, 45, 0.8);
  border-color: rgba(220, 220, 220, 0.3);
  //box-shadow: 10px -10px rgba(41, 42, 45, 0.8);
  display: flex;
  justify-content: center;
  height: 500px;
  width: 500px;
  position: absolute;
  opacity: 0;
  z-index: 1;

  animation: pulse 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {
    transform: scale( 0.1, 0.1);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale( 1, 1);
    opacity: 0;
  }
}

</style>
