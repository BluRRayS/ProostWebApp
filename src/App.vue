<template>
  <div id="app">
    <transition  name="view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name:'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');


html, body {
  font-family: 'Roboto Condensed', sans-serif;
}


#app {
  font-family: 'Roboto Condensed', sans-serif;
}

button{
      font-family: inherit;
}

input{
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

