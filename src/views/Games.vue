<template>
  <div class="panel">
    <v-row style="margin-top: 3.5em; justify-content: space-between">
      <h1 style="margin-top: 0; margin-left: 70px">Kies een spel!</h1>

        <GameSettings />

    </v-row>
    <span>Nu kan het feest echt beginnen.</span>
    <div class="mt-2">
      <GameRow
        class=""
        v-for="game in allGames"
        :key="game.id"
        @gameClick="gameClick"
        v-bind:game="game"
      ></GameRow>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import GameRow from "../components/GameRow";
import GameSettings from "../components/GameSettings";

export default {
  name: "Games",
  components: {
    GameRow,
    GameSettings,
  },
  computed: mapGetters(["allGames", "gameById", "allPlayers"]),
  methods: {
    gameClick(id) {
      var game = this.gameById(id);

      if (!game.locked) {
        if (checkRequiredPlayers(game, this.allPlayers)) {
          if (game.id == 2) {
            if (checkTimeHalf4()) {
              this.$router.push({ name: game.route });
            } else {
              this.$swal("Je kunt dit spel pas vanaf 03:30 spelen!");
            }
          } else {
            this.$router.push({ name: game.route });
          }
        } else {
          this.$swal(
            `Je hebt minimaal ${game.minPlayers} spelers nodig om dit spel te spelen!`
          );
        }
      }
    },
  },
};

function checkRequiredPlayers(game, players) {
  var valid = true;
  if (players.length < game.minPlayers) {
    valid = false;
  }
  return valid;
}

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
</style>