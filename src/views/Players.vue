<template>
  <div class="main-container">
    <!-- Title and banner -->
    <div class="title-container">
      <img class="title-image" src="../assets/logonobackground.png" />
      <h1 class="title-header">Proost!</h1>
    </div>

    <!-- Players container -->

    <div class="player-container">
    <AddPlayer v-on:add-player="$emit('add-player',newPlayer.id,newPlayer.name)"/>
      <div v-bind:key="player.id" v-for="player in players">
        <PlayerRow v-bind:player="player" v-on:del-player="$emit('del-player',player.id)"  />
      </div>
    </div>

    <!-- Play button -->
    <div class="play-button-container">
      <button class="play-button">Het feest kan beginnen!</button>
    </div>
  </div>
</template>



<script>
import PlayerRow from "../components/PlayerRow";
import AddPlayer  from "../components/AddPlayer";

export default {
  name: "Players",
  components: {
    PlayerRow,
    AddPlayer
  },
  props: ["players"]
};
</script>


<style scoped>
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-image {
  height: 50px;
  width: auto;
  padding-right: 0.5em;
}

.title-header {
  color: var(--colorPrimary);
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100vh;
}

.player-container {
  padding: 1em;
  border-radius: 1em;
  background-color: var(--colorPrimary);
  overflow-y: auto;
  width: 90%;
  min-width: 280px;
  max-width: 650px;
  margin: 1em;
}

.form-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--colorPrimaryDark);
  border-radius: 1em;
  padding: 0.5em;
  margin-bottom: 0.2em;
}

.play-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button {
  border: var(--colorPrimary) 2px solid;
  background-color: transparent;
  border-radius: 2em;
  padding: 1em;
  margin: 1em;
  color: var(--colorPrimary);
  bottom: 0px;
  transition: 0.5s ease-in-out;
}

.play-button:hover {
  background-color: var(--colorPrimary);
  color: black;
}
</style>