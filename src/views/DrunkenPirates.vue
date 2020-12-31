<template>
  <div id="game" class="game">
    <v-btn fab dark absolute style="top:10px; left:10px;" @click="stopGame"><v-icon>mdi-arrow-left</v-icon></v-btn>
    <v-progress-circular
      indeterminate
      :size="50"
      color="primary"
      v-if="!loaded"
    ></v-progress-circular>

    <div v-if="loaded">
      <v-row style="margin:0" class="align-end flex-column">
        <v-btn @click="previousItem" fab class="mr-4">
          <v-icon>mdi-comment-arrow-left</v-icon>
        </v-btn>
      </v-row>
      <h1 class="game-text pa-6">{{ displayValue }}</h1>
      <v-btn  @click="nextItem" rounded>Volgende</v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import gameSettingStore from "../store/Modules/gameSettings";
const colors = [
  "#d32f2f",
  "#c2185b",
  "#7b1fa2",
  "#512da8",
  "#303f9f",
  "#1976d2",
  "#005b9f",
  "#006978",
  "#00796b",
  "#00600f",
  "#bc5100",
  "#c43e00",
  "#ac1900",
  "#3e2723",
];

export default {
  name: "DrunkenPirates",
  data() {
    return {
      db: null,
      gameItems: [],
      displayValue: "",
      loaded: false,
      index: 0,
      allQuestionsPlayed: 0
    };
  },
  methods: {
    nextItem() {
      if (!this.loaded) return;
      if (this.index >= this.gameItems.length) {
        this.index = 0;
        if(this.allQuestionsPlayed === 0)
        {
          this.$swal(
            `Je hebt alle vragen gespeeld! Als je doorspeelt worden vragen herhaald.`
          );
           this.allQuestionsPlayed = 1;
           this.gameItems = shuffle(this.gameItems);
        }   
      }
      console.log(this.gameItems);
      console.log(this.index);
      this.displayValue = PrepareGameItem(this.gameItems[this.index].value);
      setRandomBackgroundColor();
      this.index++;
    },
    previousItem() {
      this.index--;
      if (!this.loaded) return;
      if (this.index <= 0) {
        this.index = 0;
      }
      console.log(this.gameItems);
      console.log(this.index);
      this.displayValue = PrepareGameItem(this.gameItems[this.index].value);
      setRandomBackgroundColor();
    },
    stopGame(){
      this.$router.push('games')
    }
  },
  created() {
    this.db = firebase.firestore();
    // Todo Set localization in the future.
    this.db
      .collection("nl-NL")
      .doc("DrunkenPirates")
      .get()
      .then((querySnapshot) => {
        const drunkenPirates = querySnapshot.data();
        drunkenPirates.Interactions.forEach((item) => {
          const gameObject = { value: item };
          Object.assign(gameObject, { type: 0 });
          this.gameItems.push(gameObject);
        });
        drunkenPirates.Opinions.forEach((item) => {
          const gameObject = { value: item };
          Object.assign(gameObject, { type: 1 });
          this.gameItems.push(gameObject);
        });
        drunkenPirates.Orders.forEach((item) => {
          const gameObject = { value: item };
          Object.assign(gameObject, { type: 2 });
          this.gameItems.push(gameObject);
        });
        this.gameItems = shuffle(this.gameItems);
        console.info(this.gameItems);
        this.loaded = true;
        this.nextItem();
      });
  },
  mounted() {
    setRandomBackgroundColor();
  },
};

function setRandomBackgroundColor() {
  document.getElementById("game").style.backgroundColor =
    colors[random(0, colors.length)];
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function PrepareGameItem(value) {
  console.log(value);
  var state = JSON.parse(localStorage.getItem("vuex"));
  var players = state.players.players;
  console.log(players);
  // Set players
  var player1 =
    players[random(0, players.length)].name;
  var player2 =
    players[random(0, players.length)].name;
  while (player2 == player1) {
    player2 =
      players[random(0, players.length)]
        .name;
  }
  value = value.replaceAll("[pl1]", player1);
  value = value.replaceAll("[pl2]", player2);
  // Set drinking type
  console.log(gameSettingStore.state.settings.drinkTypes);

  var AvailabledrinkTypes = gameSettingStore.state.settings.drinkTypes.filter(
    (item) => item.IsUsed
  );
  console.log(AvailabledrinkTypes);
  let drinkingType = {};
  if (AvailabledrinkTypes === undefined || AvailabledrinkTypes.length == 0) {
    drinkingType = {
      name:
        "adtje, en grapjas vergeet je niet even drinkformaten aan te zetten in de instellingen",
      minAmount: 1,
      maxAmount: 5,
    };
  } else {
    var drinkingTypeChance = [];
    // Add change multipliers to make some drinking multipliers more rare.
    AvailabledrinkTypes.forEach((drinkType) => {
      console.log(drinkType);
      for (var i = 0; i < drinkType.chanceMultiplier; i++) {
        drinkingTypeChance.push(drinkType);
      }
    });
    drinkingTypeChance = shuffle(drinkingTypeChance);
    drinkingType = drinkingTypeChance[random(0, drinkingTypeChance.length)];
  }
  value = value.replace("[drinkType]", drinkingType.name);
  // Set drinking value
  var drinkingValue = random(drinkingType.minAmount, drinkingType.maxAmount);
  value = value.replace("[amount]", drinkingValue);
  // Done
  return value;
}

function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}
</script>

<style lang="scss" scoped>
.game {
  height: 100%;
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .game-text {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    max-width: 800px;
  }
}
</style>