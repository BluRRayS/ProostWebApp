<template>
  <router-view></router-view>
  <!-- <transition name="view">
  
  </transition> -->
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html,
body {
  display: block;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(0, 245, 255);
    background: linear-gradient( 45deg, rgba(0, 245, 255, 1) 0%, rgba(151, 86, 235, 1) 53%, rgba(228, 58, 247, 1) 100%);
}

button {
  font-family: inherit;
}

input {
  font-family: inherit;
}

view-enter-active,
.view-leave-active {
  transition: opacity 0.75s ease-in-out, transform 0.75s ease;
}
.view-enter-active {
  transition-delay: 0.75s;
}
.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>

