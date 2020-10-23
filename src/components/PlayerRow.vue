<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-bind:class="{ special: player.special }">{{
          player.name
        }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon
            color="grey lighten-1"
            @click="$emit('deletePlayer', player.id)"
            >mdi-delete</v-icon
          >
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider/>
  </div>
</template>

<script>
export default {
  name: "PlayerRow",
  props: ["player"],
};
</script>

<style scoped>
.special {
  color: var(--colorSecondaryDark);
}
</style>