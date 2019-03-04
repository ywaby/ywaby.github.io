
<template>
  <div id="app">
    <mu-flex>
      <mu-flex align-items="center" justify-content="right">
        <mu-flex>
          <mu-avatar size="128">
            <img src="./assets/avatar.jpg">
          </mu-avatar>
        </mu-flex>
        <mu-flex fill>
          <p>{{headline}}</p>
        </mu-flex>
      </mu-flex>
    </mu-flex>
    <section style="background-color:#9e9e9e">
      <h2>perfer tools</h2>
      <mu-icon
        size="88"
        color="lightBlue800"
        v-for="(item,idx) in perfer_tools"
        :key="idx"
        :value="item.icon"
      ></mu-icon>
    </section>
    <mu-flex
      class="perfer-langs"
      style="background-color:white;
      padding: 10px 0;
      text-align: left;"
    >
      <h2>perfer langs</h2>
      <mu-icon
        size="88"
        color="lightBlue800"
        v-for="(item,idx) in perfer_langs"
        :key="idx"
        :value="item.icon"
      ></mu-icon>
    </mu-flex>
    <mu-flex
      class="footer"
      style="background-color:DarkSlateGray;
      color:white;
      padding: 10px 0;"
      justify-content="center"
    >
      <mu-flex fill justify-content="start" align-items="start">
        <h2>contract me</h2>
      </mu-flex>
      <mu-flex justify-content="end" align-self="center">
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
    </mu-flex>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    headline: "I'm a freelancer and a indie game developer,i like foss.",
    perfer_tools: [
      { icon: ":mdi mdi-debian" },
      { icon: ":mdi mdi-blender-software" },
      { icon: ":mdi mdi-visual-studio-code" },
      { icon: ":mdi mdi-firefox" },
      { icon: ":mdi mdi-reaper" },
      { icon: ":mdi mdi-godot" },
      { icon: ":mdi mdi-inkscape" },
      { icon: ":mdi mdi-krita" },
      { icon: ":mdi mdi-libreoffice" },
      { icon: ":mdi mdi-kicad" },
      { icon: ":mdi mdi-freecad" }
    ],
    perfer_langs: [
      { icon: ":mdi mdi-language-c" },
      { icon: ":mdi mdi-language-cpp" },
      { icon: ":mdi mdi-language-csharp" },
      { icon: ":mdi mdi-language-python" }
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
.mu-button {
  margin: 8px;
}
.perfer-langs {
  .mu-icon {
    margin: 18px;
  }
}
</style>