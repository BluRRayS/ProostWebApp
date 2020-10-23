<template>
  <div class="panel">
    <h1>Mijn account</h1>
    <v-list subheader three-line style="text-align:left">
      <v-subheader>Account instellingen</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Content filtering</v-list-item-title>
          <v-list-item-subtitle
            >Set the content filtering level to restrict appts that can be
            downloaded</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle
            >Require password for purchase or use password to restrict
            purchase</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list flat subheader three-line style="text-align:left"> 
      <v-subheader>General</v-subheader>

      <v-list-item-group v-model="settings" multiple active-class="">
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle
                >Notify me about updates to apps or games that I
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle
                >Auto-update apps at any time. Data charges may
                apply</v-list-item-subtitle
              >
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle
                >Automatically add home screen widgets when downloads
                complete</v-list-item-subtitle
              >
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn color="indigo" dark @click="signOut">uit loggen</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Account",
  computed: {
    ...mapGetters("user", ["getDisplayInitials"]),
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      setIsAuthenticated: "user/setIsAuthenticated",
      showSnackbar: "snackbars/setSnackbar",
    }),
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
};
</script>

<style>
</style>