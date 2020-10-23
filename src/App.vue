<template>
  <div class="background">
    <v-app style="background: none">
      <v-snackbar
        v-for="(snackbar, index) in snackbars.filter((s) => s.show)"
        :key="snackbar.text + Math.random()"
        v-model="snackbar.show"
        :color="snackbar.color"
        :timeout="snackbar.timeout"
        :style="`margin-top : ${index * 60 + 10}px`"
        dismissible
        elevation="2"
        top
        right
        >{{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn dark icon v-bind="attrs" @click="snackbar.show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <router-view></router-view>

      <v-footer app padless>
        <Nav v-if="isAuthenticated" />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  computed: {
    ...mapState({
      snackbars: (state) => state.snackbars.snackbars,
      isAuthenticated: (state) => state.user.isAuthenticated,
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Open+Sans:wght@300&display=swap");

html,
body {
  font-family: "Open Sans", sans-serif;
  display: block;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.background {
  background: rgb(0, 245, 255);
  background: linear-gradient(
    45deg,
    rgba(0, 245, 255, 1) 0%,
    rgba(151, 86, 235, 1) 53%,
    rgba(228, 58, 247, 1) 100%
  );
}

.panel {
  font-family: "Open Sans", sans-serif;
  background: white;
  padding: 0em 2.5em 0 2.5em;
  height: 100%;
  text-align: center;
  width: auto;
  width: 100%;
  @media only screen and (min-width: 425px) {
    margin-left: 2em;
    margin-right: 2em;
  }
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  flex-direction: column;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  align-self: center;
  justify-content: start;
  h1 {
    font-family: "Heebo", sans-serif;
    margin-top: 2em;
  }
}
</style>
