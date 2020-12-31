<template>
  <v-bottom-navigation color="indigo">
    <v-btn v-for="link in links" :key="link.text" router :to="link.route">
      <span>{{link.text}}</span>
      <v-icon>{{link.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>    

<script>
export default {
  name: "Nav",
  data() {
    return {
      links: [
        {
          icon: "mdi-account-multiple",
          text: "Spelers",
          route: "/players",
        },
        {
          icon: "mdi-glass-mug-variant",
          text: "Spellen",
          route: "/games",
        },
        {
          icon: "mdi-account-multiple",
          text: "Account",
          route: "/account",
        },
      ],
    };
  }
};
</script>

<style scoped>
</style>