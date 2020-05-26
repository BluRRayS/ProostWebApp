<template>
  <div class="form-row" @click="$emit('gameClick',game.id)">
    <img class="gameImage" v-bind:src="require(`@/assets/${game.imagePath}`)" alt="gameImg">
    <div>
      <h3>{{game.name}}</h3>
      <p>{{game.description}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "GameRow",
  props: ["game"]
};
</script>

<style scoped>
  .gameImage{
    width: 20vw;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    margin-right: 1em;

  }
</style>