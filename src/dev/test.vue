
<template>
  <div id="app">
    <mu-container>
      <mu-paper class="demo-paper" :z-depth="1">abc</mu-paper>
      <mu-paper class="demo-paper" :z-depth="1">
        <mu-icon size="88" value=":mdi mdi-firefox"></mu-icon>
      </mu-paper>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({})
};
</script>

<style lang="less">
.demo-paper{
  height: 100px;width:  100px
}
.mu-paper{
  margin: 20px;
}
</style>