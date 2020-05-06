<template>
  <div id="app">
      <Players v-bind:players="players" v-on:del-player="deletePlayer" v-on:add-player="addPlayer()"/>
  </div>
</template>

<script>
import Players from "./views/Players";

export default {
  name:'app',
  components:{
    Players
  },
  data(){
    return{ 
      players: [{
        id:1,
        name:"Joep"
      }]
    }
  },
  methods:{
    deletePlayer(id){
      this.players = this.players.filter(player => player.id !== id);
    },
    addPlayer(newPlayer){
      this.players.push(newPlayer);
    }
  }
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

