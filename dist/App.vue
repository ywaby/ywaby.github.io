<template>
  <div id="App">
    <section md-theme="selection-orange">
      <div class="md-layout-item">
        <md-avatar class="md-large">
          <img src="./assets/avatar.jpg" alt="avatar">
        </md-avatar>
      </div>
      <div>
        <md-content md-theme="selection-person" class="md-body-2">
          <p>Also works when the theme is dark.</p>
        </md-content>
      </div>
    </section>
    <div md-theme="selection-prefer">
      <md-button class="md-icon-button md-primary md-size-80">
        <md-icon class>menu</md-icon>
      </md-button>
      <md-icon class="md-size-2x">
        <img src="./assets/twitter.png">
      </md-icon>
      <md-button class="md-raised md-icon-button" href="https://twitter.com/ywaby_cn">
        <md-icon class="md-size-2x">
          <img src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" alt>
        </md-icon>
      </md-button>
    </div>

    <section md-theme="selection-contact">
      <md-button class="md-raised md-icon-button md-size-2x" href="https://twitter.com/ywaby_cn">
        <md-icon class="md-size-2x">
          <img src="./assets/twitter.svg" alt>
        </md-icon>
      </md-button>
      <md-button class="md-raised md-icon-button" href="https://github.com/ywaby">
        <!-- <img src="./assets/github.png" alt> -->
        <md-icon class="md-size-2x" md-src="/assets/twitter.svg"></md-icon>
      </md-button>
      <md-button class="md-raised md-icon-button" href="mailto:ywabygl@gmail.com">
        <img src="./assets/email.png" alt>
      </md-button>
      <md-button class="md-raised md-icon-button" href="https://ywaby.itch.io/">
        <img src="./assets/itch.io.png" alt>
      </md-button>
      <md-button class="md-raised md-icon-button" href="https://t.me/ywaby">
        <img src="./assets/telegram.png" alt>
      </md-button>
      <md-button class="md-raised md-icon-button" href="https://www.artstation.com/ywaby">
        <img src="./assets/artstation.png" alt>
      </md-button>
      <md-button class="md-raised md-icon-button" href="@ywaby:matrix.org">
        <img src="./assets/matrix.png" alt>
      </md-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "selection-prefer",
  (
    accent: md-get-palette-color(red, 500),
    theme: dark
  )
);
@include md-register-theme(
  "selection-contact",
  (
    accent: md-get-palette-color(blue, 500),
    theme: light
  )
);
@include md-register-theme(
  "selection-person",
  (
    accent: md-get-palette-color(orange, 500),
    theme: light
  )
);
</style>
