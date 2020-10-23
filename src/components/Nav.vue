<template>
    <v-bottom-navigation color="indigo" >
      <v-btn value="players" @click="navigateToPlayers">
        <span>Spelers</span>
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>

      <v-btn value="games" @click="navigateToGames">
        <span>Spellen</span>
        <v-icon>mdi-glass-mug-variant</v-icon>
      </v-btn>

      <v-btn value="settings" @click="navigateToAccount">
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>    

<script>
export default {
  name: "Nav",
  methods:{
    navigateToPlayers()
    {
      this.$router.push({name:"players"});
    },
    navigateToGames()
    {
      this.$router.push({name:"games"});
    },
    navigateToAccount()
    {
      this.$router.push({name:"account"});
    }
  }
};
</script>

<style scoped>




</style>