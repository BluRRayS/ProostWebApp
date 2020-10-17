<template>
  <div class="register">
    <div class="register-panel">
      <v-form class="register-form" @submit.prevent="registerUser">
        <h1>Registeren</h1>
        <v-text-field
          prepend-inner-icon="mdi-account"
          label="Weergave naam"
          type="text"
          hint="De naam die andere gebruikers te zien krijgen"
          v-model="name"
          required
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-email"
          label="Email"
          type="email"
          v-model="email"
          required
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-lock"
          label="Wachtwoord"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          required
        ></v-text-field>
        <button v-ripple type="submit" class="register-button">
          Registreren
        </button>
      </v-form>
      <p style="text-align: center">
        Ik heb al een account
        <router-link :to="{ name: `login` }">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      showPassword: "",
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          console.error(error);
          // Todo show notification to user.
        });
    },
  },
};
</script>

<style scoped lang="scss">
.register {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  .register-panel {
    background: white;
    padding: 0em 2.5em 0 2.5em;
    height: 100vh;
    text-align: center;
    width: auto;
    @media only screen and (min-width: 425px) {
      margin-left: 2em;
      margin-right: 2em;
    }
    @media only screen and (min-width: 600px) {
      width: 400px;
    }
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

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
      margin-top: 2em;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge  */
      text-align: center;
      user-select: none; /* Standard */
    }

    .register-form {
      display: flex;

      flex-direction: column;
      text-align: left;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 0.8em;

      .register-button {
        border-radius: 5em;
        background: rgb(0, 245, 255);
        background: linear-gradient(
          45deg,
          rgba(0, 245, 255, 1) 0%,
          rgba(151, 86, 235, 1) 53%,
          rgba(228, 58, 247, 1) 100%
        );
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        margin-top: 2.5em;
        font-family: "Heebo", sans-serif;
        font-size: 15px;
        height: 40px;
        transition: all 0.5s;
        background-size: 200% 100%;
        margin-bottom: 0.75em;

        &:hover {
          background-position: 100%;
        }
      }
    }
  }
}
</style>