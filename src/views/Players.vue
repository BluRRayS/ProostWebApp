<template>
  <div class="panel">
    <h1>Proost!</h1>
    <span>Voeg alle spelers toe.</span>
    <AddPlayer @addPlayer="addPlayer" />

    <v-card style="text-align: left" class="my-4 rounded-0 players">
      <PlayerRow
        v-for="player in allPlayers"
        :key="player.id"
        v-bind:player="player"
        @deletePlayer="deletePlayer"
      />
    </v-card>

    <button class="start-button" @click="startGame">
      Gaan met die banaan!
    </button>
  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
import PlayerRow from "../components/PlayerRow";
import AddPlayer from "../components/AddPlayer";

export default {
  name: "Players",
  components: {
    PlayerRow,
    AddPlayer,
  },
  computed: mapGetters(["allPlayers"]),
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      setIsAuthenticated: "user/setIsAuthenticated",
      showSnackbar: "snackbars/setSnackbar",
    }),
    addPlayer(player) {
      var name = player.name.toLowerCase();
      if (name.includes("joep")) {
        player.special = true;
      }
      this.$store.commit("addPlayer", player);
    },

    deletePlayer(id) {
      this.$store.commit("deletePlayer", id);
    },

    startGame() {
      if (this.allPlayers.length < 3) {
        this.$swal("Je hebt minimaal 3 spelers nodig!");
        return;
      } else {
        // change view to game view
        this.$router.push({ name: "games" });
        return;
      }
    },
  },
};
</script>


<style scoped lang="scss">
.players {
  max-height: 60vh;
  overflow-y: scroll;
}
.start-button {
  width: 100%;
  border-radius: 5em;
  background: rgb(0, 245, 255);
  background: linear-gradient(
    45deg,
    rgba(0, 245, 255, 1) 0%,
    rgba(151, 86, 235, 1) 53%,
    rgba(228, 58, 247, 1) 100%
  );
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2.5em;
  // font-family: "Heebo", sans-serif;
  font-size: 15px;
  height: 40px;
  transition: all 0.5s;
  background-size: 200% 100%;
  margin-bottom: 0.75em;

  &:hover {
    background-position: 100%;
  }
}
</style>