<template>
  <div class="main-container">

    <!-- Title and banner -->
    <div class="title-container">

        <button @click="back" class="back-button grow">terug</button>
      <h1 class="title-header">Kies een spel!</h1>
      <div class="grow"></div>
    </div>

    <!-- Games container -->
    <div class="game-container">
        <GameRow></GameRow>
    </div>


  </div>
</template>


<script>
 import GameRow from '../components/GameRow';

export default {
  name: "Games",
  components: {
      GameRow
  },
  methods:{
      back(){
          // Change view to player view
          this.$router.push({name: 'Players'})
      }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100vh;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly
}

.title-header {
  color: var(--colorPrimary);
  text-align: center;
  margin-left: 2em;
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

.back-button {
  background: var(--colorAccent);
  color: white;
  padding: 1em;
  border-radius: 2em;
  width: 50px;
  height: 50px;
  text-align: center;
  border: none;
}

.game-container{
  padding: 1em;
  border-radius: 1em;
  background-color: var(--colorPrimary);
  overflow-y: auto;
  width: 90%;
  min-width: 280px;
  max-width: 650px;
  margin: 1em;
}
</style>