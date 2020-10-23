<template>
  <div>
    <v-card class="rounded-0" outlined style="text-align: left">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ game.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <div>
              <v-icon>mdi-account-group</v-icon>
              <span class="pl-1">{{ game.minPlayers }}</span>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar height="50" width="50">
          <v-img v-bind:src="require(`@/assets/${game.imagePath}`)"></v-img
        ></v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        {{ game.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          rounded
          dark
          block
          color="indigo"
          @click="$emit('gameClick', game.id)"
        >
          spelen
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template> 

<script>
export default {
  name: "GameRow",
  props: ["game"],
};
</script>

<style scoped>
.gameImage {
  width: 20vw;
  max-width: 100px;
  height: 20vw;
  max-height: 100px;
  border-radius: 50%;
  margin-right: 1em;
}
</style>