<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  display: block;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(0, 245, 255);
  background: linear-gradient(
    45deg,
    rgba(0, 245, 255, 1) 0%,
    rgba(151, 86, 235, 1) 53%,
    rgba(228, 58, 247, 1) 100%
  );
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;;
}
</style>
