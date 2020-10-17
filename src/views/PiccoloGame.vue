<template>
  <div id="game-container" class="game" @click="nextItem">
    <div>
      <h1 class="game-text" v-if="piccolo.loaded">{{this.piccolo.active}}</h1>
    </div>
    <progress id="progress" class="progressbar"></progress>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import store from '../store/Modules/players'

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
          "#3e2723"
        ];
let questionsAmount = 0;

export default {
  name: "PiccoloGame",
  computed: mapGetters(["allPlayers"]),
  data() {
    return {
      piccolo: {
        orders: [],
        opinions: [],
        interactions: [],
        loaded: false,
        active: ""    
      },
      index: 0
    };
  },
  methods: {
    nextItem: function() {
      if (this.piccolo.loaded == false) return;

      //If all the queue's are empty the game is finished
      if (this.piccolo.opinions.length == 0 && this.piccolo.orders.length == 0 && this.piccolo.opinions.length == 0) {
        this.$router.push({ name: 'Players'})
      }
      else{
        var chosen = false;
        while(!chosen){
          //var random = random(0,3);
          var random =  Math.floor(Math.random() * (3 - 0) ) + 0;
          if(random == 0 && this.piccolo.interactions.length != 0)
          {
            chosen = true
            this.piccolo.active = prepareInteraction(this.piccolo.interactions[0]);
            this.piccolo.interactions.shift();
          }
          else if(random == 1 && this.piccolo.opinions.length != 0)
          {
            chosen = true
            this.piccolo.active = this.piccolo.opinions[0];
            this.piccolo.opinions.shift();
          }
          else if(random == 2 && this.piccolo.orders.length != 0)
          {
            chosen = true
            this.piccolo.active = prepareOrder(this.piccolo.orders[0]);
            this.piccolo.orders.shift();
          }
        }
      }
      setRandomBackgroundColor();
      updateProgressBar();
    }
  },
  created() {
    questionsAmount = 0;

    firebase.database.collection("piccolo")
      .doc("orders")
      .get()
      .then(querySnapshot => {
        querySnapshot.data().category.forEach(order => {
          this.piccolo.orders.push(order);
        });
        this.piccolo.orders = shuffle(this.piccolo.orders);
         questionsAmount+= this.piccolo.orders.length
      });

    firebase.database.collection("piccolo")
      .doc("opinions")
      .get()
      .then(querySnapshot => {
        querySnapshot.data().category.forEach(opinion => {
          this.piccolo.opinions.push(opinion);
        });
        this.piccolo.opinions = shuffle(this.piccolo.opinions);
         questionsAmount+= this.piccolo.opinions.length
      });

    firebase.database.collection("piccolo")
      .doc("interactions")
      .get()
      .then(querySnapshot => {
        querySnapshot.data().category.forEach(interaction => {
          this.piccolo.interactions.push(interaction);
        });
        this.piccolo.interactions = shuffle(this.piccolo.interactions);
        questionsAmount+= this.piccolo.interactions.length
        this.piccolo.loaded = true;
        initProgressBar(questionsAmount);
        this.nextItem();
      });

  },
  mounted(){   
    setRandomBackgroundColor();
  } 
};

function setRandomBackgroundColor() {
  document.getElementById(
    "game-container"
  ).style.backgroundColor = colors[random(0,colors.length)];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function initProgressBar(maxValue){
  var progressbar = document.getElementById("progress");
  progressbar.max=maxValue;
  progressbar.value=0;
}

function updateProgressBar(){
  document.getElementById("progress").value++;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function prepareOrder(order){
  var withName = store.state.players[random(0,store.state.players.length)].name +" "+ order;
  return withName;
}

function prepareInteraction(interaction){
  console.log(store);
  var player1 = store.state.players[random(0,store.state.players.length)].name;
  var player2 = store.state.players[random(0,store.state.players.length)].name;
  while(player2 == player1)
  {
    player2 = store.state.players[random(0,store.state.players.length)].name;
  }

  interaction = interaction.replace("[pl1]",player1);
  interaction = interaction.replace("[pl2]",player2);
  return interaction;
}


</script>

<style scoped>
.game {
  width: 100vw;
  height: 100vh;
  background-color: gray;
  color: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
   -webkit-appearance: none;
   appearance: none;
}

.game-text{
  color: white;
  display: flex;
  justify-content: center;
  text-align:center;
  padding-left: 1em;
  padding-right:1em;
  -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
}

.progressbar {
  position: fixed;
  width: 100%;
  background-color: #232323;
  height: 10px;
  bottom: 0px;
}

progress[value]::-webkit-progress-bar {
  background-color:gray;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
 background-color: #232323; 
}
</style>