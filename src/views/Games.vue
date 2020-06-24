<template>
  <div class="main-container">
    <!-- Title and banner -->
    <div class="title-container">
      <button @click="back" class="back-button">
        <v-icon name="arrow-left"></v-icon>
      </button>
      <h1 class="title-header">Kies een spel!</h1>
    </div>

    <!-- Games container -->
    <div class="game-container">
      <div v-for="game in allGames" :key="game.id">
        <GameRow @gameClick="gameClick" v-bind:game="game"></GameRow>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import GameRow from "../components/GameRow";

export default {
  name: "Games",
  components: {
    GameRow
  },
  computed: mapGetters(["allGames", "gameById"]),
  methods: {
    back() {
      // Change view to player view
      this.$router.push({ name: "Players" });
    },

    gameClick(id) {
      var game = this.gameById(id);
      if (!game.locked) {
        if (game.id == 2) {
            if(checkTimeHalf4()){
              this.$router.push({ name: game.route });
            }
            else{
              this.$swal('Je kunt dit spel pas vanaf 03:30 spelen!');
            }
        } else {
          this.$router.push({ name: game.route });
        }
      }
    }
  }
};

function checkTimeHalf4() {
  var startTime = "03:30:00";
  var endTime = "08:00:00";

  var currentDate = new Date();

  var startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);
  startDate.setSeconds(startTime.split(":")[2]);

  var endDate = new Date(currentDate.getTime());
  endDate.setHours(endTime.split(":")[0]);
  endDate.setMinutes(endTime.split(":")[1]);
  endDate.setSeconds(endTime.split(":")[2]);
  var valid = startDate < currentDate && endDate > currentDate;
  return valid;
}
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
  justify-content: space-evenly;
  width: 100%;
  max-width: 650px;
}

.title-header {
  color: var(--colorPrimary);
  text-align: center;
  width: 100%;
  margin-left: -35px;
}

.form-row {
  display: flex;
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
  z-index: 10;
  margin-left: 1em;
}

.game-container {
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