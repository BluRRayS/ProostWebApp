<template>
  <v-form v-model="valid" @submit.prevent="addPlayer" lazy-validation ref="addPlayerForm">
    <v-row>
      <v-text-field
        v-model="name"
        counter="12"
        required
        type="text"
        label="Spelernaam"
        :rules="[required('spelernaam'), maxLength('spelernaam',12),uniqueName(allPlayers)]"
      ></v-text-field>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";
import validation from "@/utils/validation";


export default {
  name: "AddPlayer",
  data() {
    return {
      name: "",
      valid: false,
       ...validation,
    };
  },
  computed: mapGetters(["allPlayers"]),
  methods: {
    addPlayer() {
      if(! this.$refs.addPlayerForm.validate()) return;

      this.name = checkSpecialNames(this.name);

      const newPlayer = {
        id: uuidv4(),
        name: this.name,
        special: false,
      };

      this.$emit("addPlayer", newPlayer);
      this.name = "";
    },
  },
};

function checkSpecialNames(name) {
  var checkname = name.toLowerCase();
  if (checkname == "joep") {
    name += "🤓";
  } else if (checkname == "bjorn" || checkname == "björn") {
    name += "🐻";
  } else if (checkname == "jeroen") {
    name += "🍺";
  } else if (checkname == "stijn") {
    name += "🦀";
  } else if (checkname == "jan") {
    name += "🍕";
  } else if (checkname == "nikky") {
    name += "🐣";
  } else if (checkname == "elise") {
    name += "😎";
  } else if (checkname == "chelsey") {
    name += "💕";
  } else if (checkname == "casper"){
    name += "👻";
  }
  return name;
}
</script>

<style scoped>

</style>