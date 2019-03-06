
<template>
  <div id="app" style>
    <mu-flex
      class="section"
      wrap="wrap"
      justify-content="left"
      style="background-color:#eeeeee;color:black;"
    >
      <mu-avatar size="128">
        <img src="./assets/images/avatar.svg">
      </mu-avatar>
      <mu-flex align-self="center">
        <p style="font-size:1.5em; margin: 28px 28px">{{headline}}</p>
      </mu-flex>
    </mu-flex>

    <mu-flex
      direction="column"
      class="prefer section"
      justify-content="center"
      align-items="left"
      style="background-color:#fafafa ;color:black;"
    >
      <h2>prefer tools</h2>

      <mu-flex wrap="wrap" justify-content="center" align-items="center">
        <img
          v-for="(item,idx) in perfer_tools"
          :key="idx"
          height="66"
          :src="item.src"
          :alt="item.alt"
        >
      </mu-flex>
    </mu-flex>

    <mu-flex
      class="prefer section"
      direction="column"
      justify-content="center"
      align-items="left"
      style="background-color:#f5f5f5;color:black;"
    >
      <h2>prefer langs</h2>
      <mu-flex wrap="wrap" justify-content="center" align-items="center">
        <img
          v-for="(item,idx) in perfer_langs"
          :key="idx"
          height="66"
          :src="item.src"
          :alt="item.alt"
        >
      </mu-flex>
    </mu-flex>
    <mu-flex fill></mu-flex>

    <mu-flex class="footer section" justify-content="center" wrap="wrap" align-items="center">
      <h2>contract me</h2>
      <mu-flex fill></mu-flex>
      <mu-button
        color="blueGrey50"
        large
        flat
        target="_blank"
        v-for="item in social_btns"
        :key="item.href"
        :href="item.href"
        style="vertical-align:middle"
      >
        <mu-icon :value="item.icon"></mu-icon>
      </mu-button>
      <mu-button flat large color="blueGrey50" target="_blank" href="@ywaby:matrix.org">itch.io</mu-button>
      <mu-button flat large color="blueGrey50" target="_blank" href="https://ywaby.itch.io">matrix</mu-button>
    </mu-flex>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    headline: "I'm a freelancer and a indie game developer,I like open source.",
    perfer_tools: [
      { alt: "debian", src: require("./assets/images/debian.svg") },
      { alt: "blender", src: require("./assets/images/blender.svg") },
      { alt: "vscode", src: require("./assets/images/vscode.svg") },
      { alt: "firefox", src: require("./assets/images/firefox.svg") },
      { alt: "reaper", src: require("./assets/images/reaper.svg") },
      { alt: "godot", src: require("./assets/images/godot.svg") },
      { alt: "inkscape", src: require("./assets/images/inkscape.svg") },
      { alt: "krita", src: require("./assets/images/krita.svg") },
      { alt: "libreoffice", src: require("./assets/images/libreoffice.svg") },
      { alt: "kicad", src: require("./assets/images/kicad.svg") },
      { alt: "freecad", src: require("./assets/images/freecad.svg") }
    ],
    perfer_langs: [
      { alt: "c", src: require("./assets/images/lang-c.svg") },
      { alt: "cpp", src: require("./assets/images/lang-cpp.svg") },
      { alt: "csharp", src: require("./assets/images/lang-csharp.svg") },
      { alt: "python", src: require("./assets/images/lang-python.svg") }
    ],
    social_btns: [
      {
        icon: ":mdi mdi-artstation",
        href: "https://www.artstation.com/ywaby"
      },
      {
        icon: ":mdi mdi-gmail",
        href: "mailto:ywabygl@gmail.com"
      },
      {
        icon: ":mdi mdi-telegram",
        href: "https://t.me/ywaby"
      },
      {
        icon: ":mdi mdi-github-circle",
        href: "https://github.com/ywaby"
      },
      {
        icon: ":mdi mdi-twitter",
        href: "https://twitter.com/ywaby_cn"
      }
    ]
  })
};
</script>

<style lang="less">
.section {
  margin: 0px;
  padding: 10px 10px;
}
.mu-button {
  margin: 0px;
}
.prefer .mu-icon {
  margin: 10px 10px;
}
.prefer img {
  margin: 10px 10px;
}
.footer {
  background-color: #263238;
  color: white;
}
</style>