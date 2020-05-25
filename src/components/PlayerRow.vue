<template>
      <div class="form-row">
       <p v-bind:class="{'special':player.special}" class="player-name" >{{player.name}}</p>
        <button @click="$emit('deletePlayer',player.id)" class="player-remove-button">X</button>
      </div>
</template>

<script>
export default {
    name:"PlayerRow",
    props:["player"],
    
}
</script>

<style scoped>
.player-name{
    padding-left: 1em;
}

.player-remove-button {
  background: rgb(233, 30, 99);
  background: linear-gradient(
    180deg,
    rgba(233, 30, 99, 1) 0%,
    rgba(156, 39, 176, 1) 100%
  );
  border: none;
  border-radius: 0.5em;
  color: white;
  padding: 1em;
  height: 40px;
  width: 40px;
  font-size: medium;
  font-weight: 400;
  padding: 0px;
  transition: 0.5s ease-in-out;
}

.player-remove-button:hover{
  transform: scale(1.1);
}

.special{
    color: var(--colorSecondaryDark)
}
</style>