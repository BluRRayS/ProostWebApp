<template>
  <div class="panel">
    <h1>Mijn account</h1>
    <v-list subheader three-line style="text-align: left">
      <v-subheader>Account instellingen</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Weergave naam</v-list-item-title>
          <v-list-item-subtitle>
            Pas je naampie aan!
            <v-form
              ref="displayNameForm"
              @submit.prevent="updateDisplayName"
              v-model="displayValid"
            >
              <v-text-field
                :rules="[required('weergave naam')]"
                required
                v-model="displayName"
              ></v-text-field>
            </v-form>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle
            >Require password for purchase or use password to restrict
            purchase</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item> -->
    </v-list>
    <v-divider></v-divider>
    <v-btn class="mt-4" color="indigo" dark @click="signOut">uit loggen</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
import validation from "@/utils/validation";

export default {
  name: "Account",
  data() {
    return {
      displayName: "",
      displayValid: false,
      ...validation,
    };
  },
  computed: {
    ...mapGetters({
      getDisplayName: "user/getDisplayName",
    }),
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      setIsAuthenticated: "user/setIsAuthenticated",
      setDisplayName: "user/setDisplayName",
      showSnackbar: "snackbars/setSnackbar",
    }),
    updateDisplayName() {
      this.$refs.displayNameForm.validate();
      if (!this.displayValid) return;
      var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: this.displayName,
        }).then(() => {
          console.log(this.displayName);
          this.showSnackbar({ text: "Weergave naam succesvol aangepast!" });
        })
        .catch(function (error) {
          console.error(error);
          this.showSnackbar({
            text: "Oops! Er is een fout opgetreden probeer het opnieuw!",
            color: "red darken-2",
            timeout: -1,
          });
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.showSnackbar({ text: "Succesvol uitgelogd!" });
          this.setUser({});
          this.setIsAuthenticated(false);
          this.$router.replace("login");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.displayName = this.getDisplayName;
  },
};
</script>

<style>
</style>