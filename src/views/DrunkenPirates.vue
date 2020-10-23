<template>
  <div><h1 @click="nextItem">{{test}}</h1></div>
</template>

<script>
import firebase from "firebase";
import playerStore from "../store/Modules/players";
import gameSettingStore from "../store/Modules/gameSettings";

export default {
  name: "DrunkenPirates",
  data() {
    return {
      db: null,
      gameItems: [],
      test: "Heelloo",
      loaded: false
    };
  },
  methods:{
      nextItem(){
          if(!this.loaded) return;
          this.test = PrepareGameItem(this.gameItems[0].value);
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
        
      });
    console.info(this.gameItems);
    this.loaded = true;
  },
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function PrepareGameItem(value) {
    console.warn(value)
  // Set players
  var player1 =
    playerStore.state.players[random(0, playerStore.state.players.length)].name;
  var player2 =
    playerStore.state.players[random(0, playerStore.state.players.length)].name;
  while (player2 == player1) {
    player2 =
      playerStore.state.players[random(0, playerStore.state.players.length)].name;
  }
  value = value.replace("[pl1]", player1);
  value = value.replace("[pl2]", player2);
  // Set drinking type
  var AvailabledrinkTypes = gameSettingStore.state.settings.drinkTypes.filter(
    (item) => item.IsUsed
  );
  var drinkingType = {
    name: " Ja grapjas je moet wel een drinkformaat aanzetten ",
    minAmount: 1,
    maxAmount: 5,
  };
  if (
    AvailabledrinkTypes !== undefined ||
    AvailabledrinkTypes !== null ||
    AvailabledrinkTypes.length !== 0
  ) {
    drinkingType = AvailabledrinkTypes[random(0, AvailabledrinkTypes.length)];
  }
  value = value.replace("[drinkType]", drinkingType.name);
  // Set drinking value
  var drinkingValue = random(
    drinkingType.minAmount,
    drinkingType.maxAmount
  );
  value = value.replace("[amount]", drinkingValue);
  // Done
  return value;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
</script>

<style>
</style>