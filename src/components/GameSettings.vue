<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="indigo" dark v-bind="attrs" v-on="on" fab outlined>
          <v-icon>mdi-tune</v-icon>
        </v-btn>
      </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-tune</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Spel instellingen</v-list-item-title>
                <v-list-item-subtitle
                  >Hoe heftig wil je spelen?</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <div v-for="drinkType in GetDrinkTypes" :key="drinkType.id">
              <GameSettingsForm :id="drinkType.id" :drinkType="drinkType" />
            </div>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="menu = false"> Sluiten </v-btn>
          </v-card-actions>
        </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GameSettingsForm from "./GameSettingForm";

export default {
  name: "GameSettings",
  components: {
    GameSettingsForm,
  },
  computed: mapGetters(["GetDrinkTypes"]),
  data: () => ({
    menu: false,
  }),
};
</script>

<style>
</style>


