<template>
  <div id="app">
      <router-view></router-view>
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
</style>

