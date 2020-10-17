<template>
  <div class="forgotPassword">
    <div class="forgotPassword-panel">
      <v-form
        class="forgotPassword-panel-form"
        @submit.prevent="forgotPassword"
      >
        <router-link to="login">
          <v-btn icon color="black"><v-icon>mdi-arrow-left</v-icon></v-btn>
          
        </router-link>
        <h1>Wachtwoord vergeten</h1>

        <p>Vraag snel en gemakkelijk een nieuw wachtwoord aan.</p>
        <v-text-field
          prepend-icon="mdi-email"
          label="email"
          type="email"
          v-model="email"
          required
        ></v-text-field>
        <v-btn type="submit" block rounded>Nieuw wachtwoord aanvragen</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "forgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    forgotPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.email = "";
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          // Todo send notification to user.
          console.error(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Open+Sans:wght@300&display=swap");

.forgotPassword {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  .forgotPassword-panel {
    height: 100vh;
    align-items: center;
    justify-content: center;
    width: auto;
    @media only screen and (min-width: 425px) {
      margin-left: 2em;
      margin-right: 2em;
    }
    @media only screen and (min-width: 600px) {
      min-width: 400px;
    }
    display: flex;
    flex-direction: column;

    .forgotPassword-panel-form {
      background: white;
      padding: 2.5em;
      border-radius: 1em;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }

    a {
      text-decoration: none;
      color: #676767;
      &:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-decoration-color: #676767;
      }
    }

    h1 {
      @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap");
      font-family: "Heebo", sans-serif;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }
}
</style>