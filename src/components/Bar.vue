<script>
export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push({ name: "Login" });
    },
  },
  watch: {
    isLoggedIn(value) {
      // Redirect to Login page if isLoggedIn is false
      if (!value) {
        this.$router.push({ name: "Login" });
      } else {
        this.isLoggedIn = false;
      }
    },
  },
};
</script>

<template>
  <v-app-bar class="fixed-top" app color="primary">
    <!-- <v-img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->
    <router-link to="/" class="no-hover">
      <v-toolbar-title
        style="cursor-pointer;color: white;
      margin-left: 11px;
  "
        >Dataclau</v-toolbar-title
      >
    </router-link>
    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
    <template v-if="!isLoggedIn">
      <v-btn to="/login" color="white" outlined class="white--text">
        Login
      </v-btn>
      <v-btn to="/create-user" color="white" outlined class="white--text">
        Registro
      </v-btn>
    </template>
    <template v-else>
      <v-btn to="/profile" color="white" outlined class="white--text">
        Profile
      </v-btn>
      <v-btn @click="logout" color="white" outlined class="white--text">
        Logout
      </v-btn>
    </template>
  </v-app-bar>
</template>
