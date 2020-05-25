<template>
  <div class="form-row">
    <form style="display:contents" @submit="addPlayer">
      <input
        class="player-name-input"
        type="text"
        autofocus="true"
        maxlength="12"
        placeholder="Speler naam"
        v-model="name"
      />
      <input type="submit" value="+" class="player-add-button" />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddPlayer",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addPlayer(e) {
      e.preventDefault();
      const newPlayer = {
        id: uuidv4(),
        name: this.name,
        special: false
      };

      this.$emit("addPlayer", newPlayer);
      this.name = "";
    }
  }
};
</script>

<style scoped>
.player-name-input {
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid var(--colorSecondary);
  padding-top: 0.25em;
  margin-right: 0.5em;
  margin-bottom: 0.25em;
  width: 100%;
}

.player-add-button {
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
  width: 43px;
  font-size: large;
  font-weight: 400;
  padding: 0px;
  transition: 0.5s ease-in-out;
}

.player-add-button:hover{
  transform: scale(1.1);
}

.player-add-button:hover {
  scale: 1.1;
}
</style>