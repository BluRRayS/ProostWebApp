<template>
  <div class="login">
    <div class="login-panel">
      <h1>Proost!</h1>
      <h2>Login</h2>
      <v-form
        class="login-form"
        @submit.prevent="login"
        v-model="valid"
        lazy-validation
        ref="loginForm"
      >
        <v-text-field
          v-model="email"
          :rules="[required('email'), emailFormat()]"
          label="Email"
          prepend-inner-icon="mdi-email"
          type="email"
          autofocus
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[required('wachtwoord')]"
          required
          label="Wachtwoord"
          prepend-inner-icon="mdi-lock"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <router-link to="forgotPassword" class="login-form-forgot"
          >Wachtwoord vergeten?</router-link
        >
        <button v-ripple type="submit" class="login-button">Login</button>

        <button
          v-ripple
          class="login-panel-no-account-button"
          type="button"
          @click="loginWithoutAccount"
        >
          Gebruik Proost! zonder account
        </button>
      </v-form>

      <p>Of login via</p>
      <div class="login-panel-other-methods-wrapper">
        <img
          v-ripple
          @click="loginWithGoogle"
          src="@/assets/google.png"
          alt="google"
          class="login-panel-other-method-img"
        />
      </div>
      <router-link to="register">Nieuw account aanmaken</router-link>
      <a href='https://play.google.com/store/apps/details?id=nl.joepVerhoeven.Picollo&gl=NL&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><v-img alt='Ontdek het op Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/nl_badge_web_generic.png'/></a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";
import validation from "@/utils/validation";

export default {
  name: "Login",
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      showPassword: false,
      ...validation,
    };
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      setIsAuthenticated: "user/setIsAuthenticated",
      showSnackbar: "snackbars/setSnackbar",
    }),

    login() {
      this.$refs.loginForm.validate();
      if (!this.valid) return;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          this.showSnackbar({ text: "Succesvol ingelogd!" });
          this.setUser(res.user);
          this.setIsAuthenticated(true);
          this.$store.commit("addPlayer",{name: res.user.displayName});
          this.$router.replace("players");
        })
        .catch((error) => {
          console.error(error);
          if (error.code === "auth/wrong-password")
            this.showSnackbar({
              text: "Incorrect wachtwoord!",
              color: "red darken-2",
            });
          else
            this.showSnackbar({
              text: "Oops! Er is een fout opgetreden probeer het opnieuw!",
              color: "red darken-2",
              timeout: -1,
            });
        });
    },

    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase.auth().useDeviceLanguage();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          this.showSnackbar({ text: "Succesvol ingelogd!" });
          this.setUser(res.user);
          this.setIsAuthenticated(true);
          this.$router.replace("players");
        })
        .catch((err) => {
          console.error(err);
          this.showSnackbar({
            text: "Oops! Er is een fout opgetreden probeer het opnieuw!",
            color: "red darken-2",
            timeout: 0,
          });
        });
    },

    loginWithoutAccount() {
      firebase
        .auth()
        .signInAnonymously()
        .then((res) => {
          this.showSnackbar({ text: "Succesvol ingelogd!" });
          this.setUser(res.user);
          this.setIsAuthenticated(true);
          this.$router.replace("players");
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  .login-panel {
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
      text-decoration: underline;
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
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .login-form {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 0.8em;

      .login-form-forgot {
        text-align: right;
      }

      .login-button {
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
    .login-panel-no-account-button {
      border: 1px solid rgba(103, 103, 103, 1);
      border-radius: 5em;
      outline: none;
      background: none;
      height: 40px;
      color: #676767;
      cursor: pointer;
      font-weight: bold;
      font-family: "Heebo", sans-serif;
      margin-bottom: 2.5em;
      transition: all 0.5s;
      &:hover {
        background-color: rgba(103, 103, 103, 0.1);
      }
    }

    .login-panel-other-methods-wrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 2em;
      justify-content: center;
      .login-panel-other-method-img {
        transition: 0.5s all;
        width: 60px;
        height: 60px;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
